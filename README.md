# Hack Reactor NYC - Helpdesk request monitoring
This application is a prototype for a data monitoring and visualization service for insights on Helpdesk requests made across the Hack Reactor NYC campus. A Postgres and GraphQL backend powers the API, supporting a React and Apollo client using Highcharts and React Table.

<img src="https://github.com/kapolyak/HRNYC-helpdesk-monitoring/blob/master/HRNYCapp-Demo.gif" width="65%" height="65%">

To view a deployed prototype of this application, go to: https://bit.ly/2Dpldhp

## Development:

Installing dependencies: 

```
npm install
```

To run in developer mode: 

```
npm run build-dev
npm run gql-server
```

Then access the application at (http://localhost:4000).

## API
This API is designed to use GraphQL for all queries to the database. This GraphQL implementation is built with the GraphQL-yoga module on top of a Node.js/Express.js server, which helps serve static assets. 

## Data Schema
Data specific to this module is stored in a PostgreSQL database. There are four tables:

- Helpdesk: each record corresponds to a helpdesk request submitted by a student.
- Student: each record stores the name and cohort number of a Hack Reactor student.
- Staff: each record stores the name and tenure of a Hack Reactor staff member.
- Cohort: each record stores the cohort name, start date, and end date. 
