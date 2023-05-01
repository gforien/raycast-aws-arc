import { ActionPanel, Action, Icon, List } from "@raycast/api";

import jsondata from "../assets/aws-services-list.json";

export default function Command() {
  return (
    <List>
      {jsondata.map((item) => (
        <List.Item
          key={item.href}
          icon="logo_48.png"
          title={item.friendly_title || item.title}
          subtitle={item.friendly_title ? item.title : ""}
          accessories={[{ icon: null, text: "" }]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.href} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
