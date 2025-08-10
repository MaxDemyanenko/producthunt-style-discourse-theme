import { apiInitializer } from "discourse/lib/api";
import template from "discourse/templates/list/topic-list-item";

export default apiInitializer("1.40.0", (api) => {
  api.replaceRawTemplate("list/topic-list-item", template);
});
