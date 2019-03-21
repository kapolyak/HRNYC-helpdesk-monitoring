// const db = require('../../db/index.js');

let hello = (parent, args, context, info) => `Hello ${args.name || 'World'}`;

function allStaff (parent, args, context, info) {
  return context.db.query('SELECT * FROM staff')
    .then(result => {
      return result.rows;
    })
    .catch(err => {
      console.log(err);
    });
}

function staff (parent, args, context, info) {
  return context.db.query({
    text: 'SELECT * FROM staff WHERE staff_slack_id = $1',
    values: [args.staff_slack_id],
  })
    .then(result => {
      console.log(result);
      return result.rows[0];
    })
    .catch(err => {
      console.log(err);
    });
} 

function countPerDay (parent, args, context, info) {
  // let sql = args.cohort_number ? 'SELECT * FROM helpdesk' : 'SELECT * FROM helpdesk'
  console.log('COUNT PER DAY CALLED')
  if (args.cohort_number) {
    console.log('cohort number', args.cohort_number);

    return context.db.query(
      `
      SELECT * FROM cohort
      WHERE cohort.cohort_number = '${args.cohort_number}'
      `
    ).then(cohortData => {
      return context.db.query(
        `
        SELECT helpdesk.student_name, student.cohort_number, helpdesk.opened_ts from helpdesk 
        INNER JOIN student 
        ON student.student_slack_id = helpdesk.slack_id
        WHERE student.cohort_number = '${args.cohort_number}'
        `
        )
        .then(result => {
          console.log('COHORT DATA', cohortData); 

          const UNIX_BEGIN = Number(cohortData.rows[0].begin_unix_time);
          const UNIX_END = Number(cohortData.rows[0].end_unix_time);

          const hash = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0
          }

          const intervals = [
            [UNIX_BEGIN],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]

          // fill intervals
          intervals.forEach((interval, i) => {
            interval[1] = interval[0] + 604800;

            if (intervals[i + 1] !== undefined) {
              intervals[i + 1][0] = interval[1];
            }
          })

          let tickets = result.rows;
          
          tickets.forEach(ticket => {
            intervals.forEach((interval, i) => {
              if (ticket.opened_ts > interval[0] && ticket.opened_ts < interval[1]) {
                hash[i + 1] += 1;
              } 
            })
          })

          let resultArray = [];
          for (let key in hash) {
            resultArray.push({
              "date": key,
              "count": hash[key]
            })
          }

          console.log('RESULT ARRAY', resultArray);

          return resultArray
        })
        .catch(err => {
          console.log(err);
        });
    })

  } else {
    console.log('no args')
    return context.db.query('SELECT * FROM helpdesk')
      .then(result => {
        return result.rows; 
      })
      .catch(err => {
        console.log(err);
      });
  }

}

function allHelpRequests (parent, args, context, info) {
  // let sql = args.cohort_number ? 'SELECT * FROM helpdesk' : 'SELECT * FROM helpdesk'

  if (args.cohort_number) {
    console.log('cohort number', args.cohort_number);

    return context.db.query(
      `
      SELECT * FROM cohort
      WHERE cohort.cohort_number = '${args.cohort_number}'
      `
    ).then(cohortData => {
      return context.db.query(
        `
        SELECT helpdesk.student_name, student.cohort_number, helpdesk.opened_ts from helpdesk 
        INNER JOIN student 
        ON student.student_slack_id = helpdesk.slack_id
        WHERE student.cohort_number = '${args.cohort_number}'
        `
        )
        .then(result => {
          console.log('COHORT DATA', cohortData); 

          const UNIX_BEGIN = Number(cohortData.rows[0].begin_unix_time);
          const UNIX_END = Number(cohortData.rows[0].end_unix_time);

          const hash = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0
          }

          const intervals = [
            [UNIX_BEGIN],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]

          // fill intervals
          intervals.forEach((interval, i) => {
            interval[1] = interval[0] + 604800;

            if (intervals[i + 1] !== undefined) {
              intervals[i + 1][0] = interval[1];
            }
          })

          let tickets = result.rows;
          
          tickets.forEach(ticket => {
            intervals.forEach((interval, i) => {
              if (ticket.opened_ts > interval[0] && ticket.opened_ts < interval[1]) {
                hash[i + 1] += 1;
              } 
            })
          })
          let results = [];

          for (let key in hash) {
            results.push([key, hash[key]]);
          }
          console.log('HASH ARRAY', results);

          return results; 
        })
        .catch(err => {
          console.log(err);
        });
    })

  } else {
    console.log('no args')
    return context.db.query('SELECT * FROM helpdesk')
      .then(result => {
        return result.rows; 
      })
      .catch(err => {
        console.log(err);
      });
  }

}

function staffHelpRequests (parent, args, context, info) {
  let staffID = parent ? parent : args.staff_slack_id;
  console.log(args);
  console.log(parent);
  return context.db.query({
    text: 'SELECT * FROM helpdesk WHERE staff_slack_id = $1',
    values: [staffID],
  }) 
    .then(result => {
      console.log(result);
      return result.rows;
    })
    .catch(err => {
      console.log(err);
    });
} 

function helpdesks({staff_slack_id}, args, context, info) {
  console.log(staff_slack_id);
  return context.db.query({
    text: 'SELECT * FROM helpdesk WHERE staff_slack_id = $1',
    values: [staff_slack_id],
  }) 
    .then(result => {
      console.log(result.rows);
      return result.rows;
    })
    .catch(err => {
      console.log(err);
    });
}

function helpdeskCount({staff_slack_id}, args, context, info) {
  console.log(staff_slack_id);
  return context.db.query({
    text: 'SELECT COUNT(*) FROM helpdesk WHERE staff_slack_id = $1',
    values: [staff_slack_id],
  }) 
    .then(result => {
      return result.rows[0].count;
    })
    .catch(err => {
      console.log(err);
    });
}

function helpdeskAvgClaimTime({staff_slack_id}, args, context, info) {
  console.log(staff_slack_id);
  return context.db.query({
    text: `
      SELECT 
        helpdesk.staff_name, 
        ROUND
        (
          AVG
            (
              helpdesk.claimed_ts - helpdesk.opened_ts
            )
        , 2) 
        AS avg_claim_time
      FROM helpdesk
      WHERE helpdesk.staff_slack_id = $1
      GROUP BY helpdesk.staff_name
      `,
    values: [staff_slack_id],
  }) 
    .then(result => {
      return parseFloat(result.rows[0].avg_claim_time);
    })
    .catch(err => {
      console.log(err);
    });
}



module.exports = {
  Query: {
    hello,
    allStaff,
    staff,
    allHelpRequests, 
    staffHelpRequests,
    countPerDay
  },
  Staff: {
    helpdesks,
    helpdeskCount,
    helpdeskAvgClaimTime
  }
}