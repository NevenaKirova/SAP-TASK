export const usersData = [
  {
    id: 1,
    name: "Adewale Balogun",
    email: "ibrahimsuleiman95@gmail.com",
    roles: ["Owner", "User"],
    team: "Human Resources",
    status: "Active",
  },
  {
    id: 2,
    name: "Oluwaseyi Adetola",
    email: "ngozianouha080@yahoo.com",
    roles: ["Admin", "Owner", "Manager"],
    team: "IT",
    status: "Active",
  },
  {
    id: 3,
    name: "Nnamdi Onwuka",
    email: "tobiadeyemi99@gmail.com",
    roles: ["Super Admin"],
    team: "IT",
    status: "Active",
  },
  {
    id: 4,
    name: "Adetokunbo Oyewole",
    email: "tobiadeyemi99@gmail.com",
    roles: ["Owner"],
    team: "Manning",
    status: "Active",
  },
  {
    id: 5,
    name: "Emeka Okonkwo",
    email: "tobiadeyemi99@gmail.com",
    roles: ["User"],
    team: "Human Resources",
    status: "Active",
  },
  {
    id: 6,
    name: "Funmilayo Adesina",
    email: "aishabdullahi85@yahoo.com",
    roles: ["Owner", "User"],
    team: "Operations",
    status: "Active",
  },
  {
    id: 7,
    name: "Chiamaka Okafor",
    email: "chikaobi929@gmail.com",
    roles: ["Manager"],
    team: "Engineering",
    status: "Active",
  },
  {
    id: 8,
    name: "Zainab Adegoke",
    email: "fatimail23@yahoo.com",
    roles: ["Admin"],
    team: "Engineering",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Adebayo Ogunleye",
    email: "ogeichikaofor88@yahoo.com",
    roles: ["Admin"],
    team: "IT",
    status: "Active",
  },
  {
    id: 10,
    name: "Nneka Igbokwe",
    email: "emekanwosu77@gmail.com",
    roles: ["User"],
    team: "Marketing",
    status: "Inactive",
  },
  {
    id: 11,
    name: "Olujide Adeleke",
    email: "chinudeueze79@gmail.com",
    roles: ["Manager"],
    team: "Marketing",
    status: "Inactive",
  },
  {
    id: 12,
    name: "Ayodeji Ajayi",
    email: "ogeichikaofor88@yahoo.com",
    roles: ["Manager"],
    team: "Marketing",
    status: "Active",
  },
  {
    id: 13,
    name: "Oluwatoyin Ogundele",
    email: "adaobiokoro87@yahoo.com",
    roles: ["Manager"],
    team: "Marketing",
    status: "Inactive",
  },
];

export const rolesData = [
  {
    id: 1,
    name: "Admin",
    permissions: ["read", "write", "delete", "manage_users"],
    applications: ["Dashboard", "User Management", "Settings"],
    createdOn: "2023-01-01",
    updatedOn: "2024-01-01",
  },
  {
    id: 2,
    name: "Owner",
    permissions: ["read", "write", "delete", "manage_users", "manage_roles"],
    applications: ["Dashboard", "User Management", "Settings", "Billing"],
    createdOn: "2023-01-02",
    updatedOn: "2024-01-02",
  },
  {
    id: 3,
    name: "Editor",
    permissions: ["read", "write"],
    applications: ["Content Management", "Media Library"],
    createdOn: "2023-01-03",
    updatedOn: "2024-01-03",
  },
  {
    id: 4,
    name: "Viewer",
    permissions: ["read"],
    applications: ["Dashboard", "Reports"],
    createdOn: "2023-01-04",
    updatedOn: "2024-01-04",
  },
  {
    id: 5,
    name: "Moderator",
    permissions: ["read", "write", "moderate_content"],
    applications: ["Content Management", "Community"],
    createdOn: "2023-01-05",
    updatedOn: "2024-01-05",
  },
  {
    id: 6,
    name: "Contributor",
    permissions: ["read", "write"],
    applications: ["Content Management", "Blog"],
    createdOn: "2023-01-06",
    updatedOn: "2024-01-06",
  },
  {
    id: 7,
    name: "Manager",
    permissions: ["read", "write", "delete", "manage_projects"],
    applications: ["Project Management", "Team Collaboration"],
    createdOn: "2023-01-07",
    updatedOn: "2024-01-07",
  },
  {
    id: 8,
    name: "Member",
    permissions: ["read", "comment"],
    applications: ["Forum", "Community"],
    createdOn: "2023-01-08",
    updatedOn: "2024-01-08",
  },
  {
    id: 9,
    name: "Super Admin",
    permissions: [
      "read",
      "write",
      "delete",
      "manage_users",
      "manage_roles",
      "manage_system",
    ],
    applications: ["Dashboard", "User Management", "Settings", "System"],
    createdOn: "2023-01-09",
    updatedOn: "2024-01-09",
  },
  {
    id: 10,
    name: "Guest",
    permissions: ["read"],
    applications: ["Public Content"],
    createdOn: "2023-01-10",
    updatedOn: "2024-01-10",
  },
];

export const permissionsData = [
  {
    id: 1,
    name: "roles.read",
    description: "View roles and their permissions.",
  },
  {
    id: 2,
    name: "roles.write",
    description: "Create new roles in the system.",
  },
  {
    id: 3,
    name: "roles.update",
    description: "Modify existing roles, including permissions.",
  },
  {
    id: 4,
    name: "roles.delete",
    description: "Delete roles from the system.",
  },
  {
    id: 5,
    name: "roles.assign_to_user",
    description: "Assign roles to users.",
  },
  {
    id: 6,
    name: "roles.remove_from_user",
    description: "Remove roles from users.",
  },
  {
    id: 7,
    name: "applications.read",
    description: "View details of applications.",
  },
  {
    id: 11,
    name: "users.read",
    description: "View details of users.",
  },
  {
    id: 12,
    name: "users.write",
    description: "Create or update user information.",
  },
  {
    id: 13,
    name: "users.delete",
    description: "Delete users from the system.",
  },
];

export const applicationsData = [
  {
    id: 1,
    title: "Expense Management System",
    description: "Track and manage employee expenses efficiently.",
  },
  {
    id: 2,
    title: "Project Management Tool",
    description: "Plan, track, and collaborate on projects.",
  },
  {
    id: 3,
    title: "Customer Relationship Management (CRM)",
    description: "Manage customer relationships and sales pipelines.",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Monitor and control inventory levels and orders.",
  },
  {
    id: 5,
    title: "Human Resources Information System (HRIS)",
    description: "Manage employee information and HR processes.",
  },
  {
    id: 6,
    title: "Document Management System",
    description: "Organize and store documents securely.",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description:
      "Sell products online with integrated payment and shipping features.",
  },
  {
    id: 8,
    title: "Learning Management System (LMS)",
    description: "Deliver and manage online courses and training programs.",
  },
  {
    id: 9,
    title: "Customer Support Ticketing System",
    description: "Handle customer inquiries and issues efficiently.",
  },
  {
    id: 10,
    title: "Sales Forecasting Tool",
    description: "Predict future sales trends based on historical data.",
  },
  {
    id: 11,
    title: "Content Management System (CMS)",
    description: "Create, manage, and publish digital content.",
  },
  {
    id: 12,
    title: "Healthcare Information System",
    description: "Store and manage patient records securely.",
  },
  {
    id: 13,
    title: "Real Estate Management Software",
    description: "Manage properties, leases, and tenant relationships.",
  },
  {
    id: 14,
    title: "Event Management Platform",
    description: "Plan, organize, and manage events and conferences.",
  },
  {
    id: 15,
    title: "Marketing Automation Software",
    description: "Automate marketing campaigns and lead nurturing processes.",
  },
  {
    id: 16,
    title: "Supply Chain Management System",
    description: "Optimize logistics, inventory, and supplier relationships.",
  },
  {
    id: 17,
    title: "Virtual Meeting Platform",
    description: "Host online meetings, webinars, and virtual events.",
  },
  {
    id: 18,
    title: "Legal Case Management Software",
    description: "Manage legal cases, documents, and client information.",
  },
  {
    id: 19,
    title: "Mobile Banking Application",
    description: "Access banking services securely from mobile devices.",
  },
  {
    id: 20,
    title: "Restaurant POS System",
    description: "Manage orders, payments, and inventory for restaurants.",
  },
];

export const roles = [
  {
    id: 1,
    label: "Admin",
  },
  {
    id: 2,
    label: "Owner",
  },
  {
    id: 3,
    label: "Editor",
  },
  {
    id: 4,
    label: "Viewer",
  },
  {
    id: 5,
    label: "Moderator",
  },
  {
    id: 6,
    label: "Contributor",
  },
  {
    id: 7,
    label: "Manager",
  },
  {
    id: 8,
    label: "Member",
  },
  {
    id: 9,
    label: "Super Admin",
  },
  {
    id: 10,
    label: "Guest",
  },
];

export const teams = [
  {
    id: 1,
    label: "Software Engineer",
  },
  {
    id: 2,
    label: "System Administrator",
  },
  {
    id: 3,
    label: "IT Support Specialist",
  },
  {
    id: 4,
    label: "Database Administrator",
  },
  {
    id: 5,
    label: "Network Engineer",
  },
  {
    id: 6,
    label: "DevOps Engineer",
  },
  {
    id: 7,
    label: "Cybersecurity Analyst",
  },
  {
    id: 8,
    label: "IT Project Manager",
  },
  {
    id: 9,
    label: "Hiring Manager",
  },
  {
    id: 10,
    label: "Technical Support Engineer",
  },
];

export const userColumns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "roles",
    label: "Roles",
    minWidth: 170,
    multiple: true,
  },
  {
    id: "team",
    label: "Team",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "center",
  },
];

export const rolesColumns = [
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "permissions",
    label: "Permissions",
    minWidth: 150,
    multiple: true,
  },
  {
    id: "applications",
    label: "Applications",
    minWidth: 150,
    multiple: true,
  },
  {
    id: "createdOn",
    label: "Created on",
    minWidth: 100,
  },
  {
    id: "updatedOn",
    label: "Updated on",
    minWidth: 100,
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];

export const permissionsColumns = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    multiple: true,
  },
];

export const applicationColumns = [
  { id: "title", label: "Name", minWidth: 170 },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    multiple: true,
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];
