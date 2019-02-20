
DROP TABLE IF EXISTS help_desk;
DROP INDEX IF EXISTS  help_desk_staff_name_index;

CREATE TABLE help_desk (
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

CREATE INDEX help_desk_staff_name_index ON help_desk (staff_name);

/* COPY help_desk FROM '/Users/trentgoing/Code/hrnycapp/db/seeds/Help_Desk_Log.csv' WITH (FORMAT csv, HEADER true); */
