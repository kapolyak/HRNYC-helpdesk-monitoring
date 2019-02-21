
DROP TABLE IF EXISTS helpdesk;
DROP INDEX IF EXISTS  helpdesk_staff_name_index;

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

/* COPY helpdesk FROM '/Users/trentgoing/Code/hrnycapp/db/seeds/HelpDesk_Log.csv' WITH (FORMAT csv, HEADER true); */
