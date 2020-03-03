/*****************************************************************************
 Filename:          api-register.ts
 Description:       API Register: use for maintainging single registry for API

 Creation Date:     05/09/2019
 Author:            Sanjeevan Bhave

 Do NOT modify or remove this copyright and confidentiality notice!
 Copyright (c) 2001 - $Date: 2015/01/14 $ Seagate Technology, LLC.
 The code contained herein is CONFIDENTIAL to Seagate Technology, LLC.
 Portions are also trade secret. Any use, duplication, derivation, distribution
 or disclosure of this code, for any reason, not expressly authorized is
 prohibited. All other rights are expressly reserved by Seagate Technology, LLC.
 *****************************************************************************/
export const version = "v1";

export default {
  all_alerts: `/api/${version}/alerts`,
  systemconfig: `api/${version}/systemconfig`,
  create_user: `api/${version}/preboarding/user`,
  login: `api/${version}/login`,
  create_csmuser: `api/${version}/csm/users`,
  logout: `/api/${version}/logout`,
  udx_reg_status: `api/${version}/udx-device/registration-status`,
  udx_reg_token: `api/${version}/udx-device/registration-token`,
  udx_device: `api/${version}/udx-device`,
  s3_account: `/api/${version}/s3_accounts`,
  s3_iam_user: `/api/${version}/iam_users`,
  s3_bucket: `/api/${version}/s3/bucket`,
  stats: `api/${version}/stats`,
  throughput: `api/${version}/stats/throughput`,
  latency: `api/${version}/stats/latency`,
  iops: `api/${version}/stats/iops`,
  capacity: `api/${version}/capacity`,
  sysconfig: `api/${version}/sysconfig`,
  bucket_policy: `/api/${version}/s3/bucket_policy`,
  user_permissions: `/api/${version}/permissions`,
  addlicensekey: ` /api/${version}/license`,
  upload_firmware: `/api/${version}/uploadfirmware`, // TODO: change to right API
  auditlogs: `/api/${version}/auditlogs`,
  maintenance: ` /api/${version}/maintenance/cluster`,
  node_status: ` /api/${version}/maintenance/cluster/node_status`,
  node_stop: ` /api/${version}/maintenance/cluster/stop`,
  node_start: ` /api/${version}/maintenance/cluster/start`,
  node_shutdown: ` /api/${version}/maintenance/cluster/shutdown`,
  health_summary: `/api/${version}/system/health`,
  audit_alerts: `/api/${version}/audit_alerts`
};
