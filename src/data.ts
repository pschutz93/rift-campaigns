export interface CampaignData {
  name: string;
  start_date: string;
  status: string;
  sent: number;
  opens: number;
  scheduled: number;
  unsubscribes: number;
  bounces: number;
  replies: number;
}
export interface ColumnInfo {
  width: number;
  label: string;
  dataKey: keyof CampaignData;
  numeric: boolean;
}

export const CanBePercent = new Set([
  "opens",
  "replies",
  "bounces",
  "unsubscribes",
]);
export const ColumnData: ColumnInfo[] = [
  {
    width: 150,
    label: "Name",
    dataKey: "name",
    numeric: false,
  },
  {
    width: 50,
    label: "Start Date",
    dataKey: "start_date",
    numeric: false,
  },
  {
    width: 50,
    label: "Status",
    dataKey: "status",
    numeric: false,
  },
  {
    width: 50,
    label: "Scheduled",
    dataKey: "scheduled",
    numeric: true,
  },
  {
    width: 50,
    label: "Sent",
    dataKey: "sent",
    numeric: true,
  },
  {
    width: 50,
    label: "Opens",
    dataKey: "opens",
    numeric: true,
  },
  {
    width: 50,
    label: "Replies",
    dataKey: "replies",
    numeric: true,
  },
  {
    width: 50,
    label: "Bounces",
    dataKey: "bounces",
    numeric: true,
  },
  {
    width: 50,
    label: "Unsubscribes",
    dataKey: "unsubscribes",
    numeric: true,
  },
];
export const sample_data: CampaignData[] = [
  {
    name: "May 10 Outreach",
    start_date: "05-10-2023",
    status: "Running",
    scheduled: 867,
    sent: 543,
    opens: 252,
    replies: 15,
    bounces: 6,
    unsubscribes: 8,
  },
  {
    name: "April Sales Event Retargeting",
    start_date: "05-02-2023",
    status: "Finished",
    scheduled: 0,
    sent: 623,
    opens: 331,
    replies: 55,
    bounces: 9,
    unsubscribes: 34,
  },
  {
    name: "May Webinar Invites",
    start_date: "05-16-2023",
    status: "Running",
    scheduled: 345,
    sent: 120,
    opens: 58,
    replies: 2,
    bounces: 1,
    unsubscribes: 8,
  },
  {
    name: "SMB - Recent Fundraise",
    start_date: "05-17-2023",
    status: "Ready to launch",
    scheduled: 500,
    sent: 0,
    opens: 0,
    replies: 0,
    bounces: 0,
    unsubscribes: 0,
  },
  {
    name: "MM - Recent Fundraise",
    start_date: "05-29-2023",
    status: "Draft",
    scheduled: 0,
    sent: 0,
    opens: 0,
    replies: 0,
    bounces: 0,
    unsubscribes: 0,
  },
  {
    name: "Shopify businesses free tax audit",
    start_date: "04-25-2023",
    status: "Finished",
    scheduled: 0,
    sent: 811,
    opens: 496,
    replies: 28,
    bounces: 20,
    unsubscribes: 44,
  },
  {
    name: "Shopify businesses tax calculator",
    start_date: "04-10-2023",
    status: "Stopped",
    scheduled: 588,
    sent: 90,
    opens: 10,
    replies: 0,
    bounces: 5,
    unsubscribes: 8,
  },
  {
    name: "Website retargeting",
    start_date: "04-11-2023",
    status: "Finished",
    scheduled: 0,
    sent: 769,
    opens: 408,
    replies: 34,
    bounces: 17,
    unsubscribes: 21,
  },
  {
    name: "Experiment - Coffee gift card",
    start_date: "04-18-2023",
    status: "Stopped",
    scheduled: 72,
    sent: 399,
    opens: 130,
    replies: 3,
    bounces: 5,
    unsubscribes: 60,
  },
  {
    name: "Experiment - Referral rewards",
    start_date: "04-04-2023",
    status: "Finished",
    scheduled: 0,
    sent: 480,
    opens: 240,
    replies: 36,
    bounces: 10,
    unsubscribes: 42,
  },
  {
    name: "Money 2020 Raffle",
    start_date: "04-04-2022",
    status: "Finished",
    scheduled: 0,
    sent: 270,
    opens: 240,
    replies: 36,
    bounces: 10,
    unsubscribes: 42,
  },
];
