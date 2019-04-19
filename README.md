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

## Data
Data specific to this module is stored in a PostgreSQL database. There are four tables:

- Helpdesk
- Student
- Staff
- Cohort
