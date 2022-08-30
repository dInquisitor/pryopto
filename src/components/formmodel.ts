interface form {
  name: string;
  placeholder: string;
  type: string;
}

export const forms: form[] = [
  {
    name: "firstname",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastname",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "company",
    placeholder: "Company Name (Not required)",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "budget",
    placeholder: "Budget ($)",
    type: "number",
  },
];
