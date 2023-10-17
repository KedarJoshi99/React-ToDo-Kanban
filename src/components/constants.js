export const ItemTypes = {
  TASK_ITEM: "task_item"
}

export const taskTemplate = {
  id: 0,
  title: "",
  description: "",
  priority: "",
  status: "",
  assignee: "",
  due_date: "",
};

export const data = [
  {
    id: 1,
    title: "Implement new feature X",
    description: "This feature will allow users to do Y.",
    priority: "High",
    status: "Active",
    assignee: "John Snow",
    due_date: "2023-10-10",
  },
  {
    id: 2,
    title: "Add new product to the catalog",
    description: "We need to add a new product to the catalog by next week.",
    priority: "Medium",
    status: "Active",
    assignee: "Peter Jones",
    due_date: "2023-10-12",
  },
  {
    id: 3,
    title: "Optimize website performance",
    description: "The website is currently slow and needs to be optimized.",
    priority: "High",
    status: "Delayed",
    assignee: "Susan Smith",
    due_date: "2023-10-08",
  },
  {
    id: 4,
    title: "Write blog post about new features",
    description:
      "We need to write a blog post about the new features we've recently released.",
    priority: "Medium",
    status: "Complete",
    assignee: "John Doe",
    due_date: "2023-10-15",
  },
  {
    id: 5,
    title: "Respond to customer support tickets",
    description:
      "We have a backlog of customer support tickets that need to be responded to.",
    priority: "Low",
    status: "Complete",
    assignee: "John Snow",
    due_date: "2023-10-31",
  },
  {
    id: 6,
    title: "Meet with team to discuss project roadmap",
    description:
      "We need to meet with the team to discuss the roadmap for the next quarter.",
    priority: "Medium",
    status: "Active",
    assignee: "Peter Jones",
    due_date: "2023-10-12",
  },
  {
    id: 7,
    title: "Develop new marketing campaign",
    description:
      "We need to develop a new marketing campaign to promote our products.",
    priority: "High",
    status: "Complete",
    assignee: "Susan Smith",
    due_date: "2023-10-20",
  },
  {
    id: 8,
    title: "Fix bug in search functionality",
    description: "The search functionality is currently not working properly.",
    priority: "High",
    status: "Delayed",
    assignee: "John Doe",
    due_date: "2023-10-18",
  },
  {
    id: 9,
    title: "Update documentation for new features",
    description:
      "We need to update the documentation to reflect the new features we've recently released.",
    priority: "Medium",
    status: "Active",
    assignee: "Peter Jones",
    due_date: "2023-10-22",
  },
  {
    id: 10,
    title: "Launch new product demo",
    description:
      "We need to launch a demo of our new product to potential customers.",
    priority: "High",
    status: "Complete",
    assignee: "Susan Smith",
    due_date: "2023-10-16",
  },
  {
    id: 11,
    title: "Prepare for upcoming conference",
    description:
      "We need to prepare for our upcoming conference by creating presentations, handouts, and other materials.",
    priority: "Medium",
    status: "Active",
    assignee: "John Doe",
    due_date: "2023-10-1",
  },
  {
    id: 12,
    title: "Conduct user interviews",
    description:
      "We need to conduct user interviews to gather feedback on our new product.",
    priority: "High",
    status: "Delayed",
    assignee: "John Snow",
    due_date: "2023-10-25",
  },
  {
    id: 13,
    title: "Set up new CRM system",
    description:
      "We need to set up a new CRM system to better track our customer interactions.",
    priority: "Medium",
    status: "Complete",
    assignee: "Peter Jones",
    due_date: "2023-10-30",
  },
  {
    id: 14,
    title: "Negotiate new vendor contracts",
    description:
      "We need to negotiate new vendor contracts to save money on our costs.",
    priority: "High",
    status: "Delayed",
    assignee: "Susan Smith",
    due_date: "2023-10-23",
  },
  {
    id: 15,
    title: "Develop training materials for new employees",
    description:
      "We need to develop training materials for our new employees to help them get up to speed quickly.",
    priority: "Medium",
    status: "Delayed",
    assignee: "John Doe",
    due_date: "2023-11-05",
  },
  {
    id: 16,
    title: "Implement new security measures",
    description:
      "We need to implement new security measures to protect our data and systems from cyberattacks.",
    priority: "High",
    status: "Active",
    assignee: "John Snow",
    due_date: "2023-10-28",
  },
  {
    id: 17,
    title: "Optimize social media marketing campaigns",
    description:
      "We need to optimize our social media marketing campaigns to reach more people and generate more leads.",
    priority: "Medium",
    status: "Delayed",
    assignee: "Peter Jones",
    due_date: "2023-11-02",
  },
  {
    id: 18,
    title: "Analyze customer data to identify trends",
    description:
      "We need to analyze our customer data to identify trends and patterns that can help us improve our products and services.",
    priority: "High",
    status: "Active",
    assignee: "Susan Smith",
    due_date: "2023-10-31",
  },
  {
    id: 19,
    title: "Develop new product roadmap",
    description:
      "We need to develop a new product roadmap that outlines our plans for the next year.",
    priority: "Medium",
    status: "Delayed",
    assignee: "John Doe",
    due_date: "2023-11-07",
  },
  {
    id: 20,
    title: "Prepare for year-end financial reporting",
    description:
      "We need to prepare for our year-end financial reporting by gathering all of the necessary data and documentation.",
    priority: "High",
    status: "Complete",
    assignee: "John Snow",
    due_date: "2023-10-30",
  },
];

export const permanentStatusList = [
  { id: 1, name: "Complete", type: "permanent" },
  { id: 2, name: "Active", type: "permanent" },
  { id: 3, name: "Delayed", type: "permanent" },
];