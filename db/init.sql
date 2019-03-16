CREATE TABLE helpdesk (
  student_name text,
  student_display_name  text,
  student_email text,
  slack_id text,
  channel_id text,
  request_content text,
  id text,
  req_status text,
  opened_ts bigint,
  claimed_ts bigint, 
  staff_msg_id decimal,
  student_channel_id text,
  student_msg_id decimal,
  time_to_answer text,
  staff_name text,
  staff_email text,
  staff_handle text,
  staff_slack_id text,
  GMT_Opened date,
  GMT_Time time,  
  Local_Time time
);

CREATE INDEX helpdesk_staff_name_index ON helpdesk (staff_name);

DROP TABLE IF EXISTS staff;

CREATE TABLE staff (
  staff_name text,
  staff_email text,
  staff_slack_id text
);

DROP TABLE IF EXISTS student;

CREATE TABLE student (
  student_name text,
  cohort_number text,
  student_slack_id text
);

DROP TABLE IF EXISTS cohort;

CREATE TABLE cohort (
  cohort_number text,
  begin_date text,
  end_date text,
  begin_unix_time bigint,
  end_unix_time bigint
);

-- COPY helpdesk FROM '/Users/kennethpolyak/code/hackreactor/Hrnycapp/db/seeds/HelpDesk_Log.csv' WITH (FORMAT csv, HEADER true);
