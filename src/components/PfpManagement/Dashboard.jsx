import { Container, Tabs, Text } from "@mantine/core";
import {
  IconSettings,
  IconCheckupList,
  IconNotes,
  IconMessage,
} from "@tabler/icons";
import ProfileSettings from "./ProfileSettings";
import { useEffect, useState } from "react";
import BookedProperties from "./BookedProperties";
import BlogsPosted from "./BlogsPosted";
import FeedbackPosted from "./FeedbackPosted";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("properties");

  const location = useLocation();

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  return (
    <Container size={"xl"} mt={"xl"}>
      <Tabs
        orientation="horizontal"
        defaultValue="properties"
        color="red"
        value={activeTab}
        onTabChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Tab value="properties" icon={<IconCheckupList size={14} />}>
            Properties
          </Tabs.Tab>
          <Tabs.Tab value="feedback" icon={<IconMessage size={14} />}>
            Feedbacks
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="settings" pl="xs">
          <ProfileSettings setActiveTab={setActiveTab}/>
        </Tabs.Panel>

        <Tabs.Panel value="properties" pl="xs">
          <BookedProperties />
        </Tabs.Panel>

        <Tabs.Panel value="feedback" pl="xs">
          <FeedbackPosted />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
