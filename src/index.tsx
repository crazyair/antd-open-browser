import { ActionPanel, Action, List } from "@raycast/api";

// const baseUrl = "https://ant-design.antgroup.com/components";
const list = [
  { label: "全部", url: "https://ant-design.antgroup.com/components/overview-cn/" },
  { label: "按钮", url: "https://ant-design.antgroup.com/components/overview-cn/" },
];

export default function Command() {
  return (
    <List>
      {list.map((item) => (  
        <List.Item
          title={item.label}
          key={item.label}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
