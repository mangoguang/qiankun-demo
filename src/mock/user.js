import Mock from "mockjs";

import userInfo from "@/json/user/userInfo";
import permission from "@/json/user/permission";

Mock.mock("/mock/user/userInfo", "get", {
  code: 200,
  message: "success",
  data: userInfo,
});

Mock.mock("/mock/user/permission", "get", {
  code: 200,
  message: "success",
  data: permission,
});
