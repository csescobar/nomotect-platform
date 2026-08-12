export interface ShowCaseItem {
  Header: string;
  Content: string;
  ImagePath: string;
  DemoUrls: Record<string, string>;
  GitHubLink: Record<string, string>;
  BgColor: string;
  Platforms: string[];
}

const dataSource: ShowCaseItem[] = [
  {
    Header: "Expense Tracker",
    Content: "Track and visualize your daily expenses in a handy way with great UI.",
    ImagePath: "./images/Showcase_Images/expense.png",
    DemoUrls: {
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/expensetracker/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/expensetracker/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/expensetracker/",
      ASPNETCore: "https://ej2.syncfusion.com/showcase/aspnetcore/expense-tracker/",
      ASPNETMVC: "https://ej2.syncfusion.com/showcase/aspnetmvc/expense-tracker/"
    },
    GitHubLink: {
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-expensetracker",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-expensetracker",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-expensetracker",
      ASPNETCore: "https://github.com/syncfusion/ej2-showcase-aspnetcore-expense-tracker",
      ASPNETMVC: "https://github.com/syncfusion/ej2-showcase-aspnetmvc-expense-tracker"
    }, 
    BgColor: "#E8FCD4",
    Platforms: ["TypeScript", "Angular", "JavaScript", "ASPNETCore", "ASPNETMVC"]
  },
  {
    Header: "Webmail",
    Content: "Outlook like user interface to manage your mailbox.",
    ImagePath: "./images/Showcase_Images/outlook.png",
    DemoUrls: {
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/webmail/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/webmail/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/webmail/",
      ASPNETCore: "https://ej2.syncfusion.com/showcase/aspnetcore/webmail/",
      ASPNETMVC: "https://ej2.syncfusion.com/showcase/aspnetmvc/webmail/"
    },
    GitHubLink: {
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-webmail",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-webmail",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-outlook",
      ASPNETCore: "https://github.com/syncfusion/ej2-showcase-aspnetcore-outlook",
      ASPNETMVC: "https://github.com/syncfusion/ej2-showcase-aspnetmvc-outlook"
    },
    BgColor: "#EFEFFF",
    Platforms: ["TypeScript", "Angular", "JavaScript", "ASPNETCore", "ASPNETMVC"]
  },
  {
    Header: "Diagram Builder",
    Content: "Diagram Builder is a web application which is used to create the diagrams like Flow Chart, Organizational Chart and Mind Map diagrams.",
    ImagePath: "./images/Showcase_Images/Diagram_builder.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/diagrambuilder/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/diagrambuilder/",
      React: "https://ej2.syncfusion.com/showcase/react/diagrambuilder/",
      Vue: "https://ej2.syncfusion.com/showcase/vue/diagrambuilder/",
      ASPNETCore: "https://ej2.syncfusion.com/showcase/aspnetcore/diagrambuilder/"
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-diagram-builder",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-diagram-builder",
      React:"https://github.com/syncfusion/ej2-showcase-react-diagram-builder",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-diagram-builder",
      ASPNETCore: "https://github.com/syncfusion/ej2-showcase-aspnetcore-diagram-builder"
    },
    BgColor: "#FAECFC",
    Platforms: ["Angular", "JavaScript", "React", "Vue", "ASPNETCore"]
  },
  {
    Header: "Loan Calculator",
    Content: "Calculates your loan payment based on your loan amount, interest and term.",
    ImagePath: "./images/Showcase_Images/emi.png",
    DemoUrls: {
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/loancalculator/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/loancalculator/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/loancalculator/",
      ASPNETCore: "https://ej2.syncfusion.com/showcase/aspnetcore/loan-calculator/",
      ASPNETMVC: "https://ej2.syncfusion.com/showcase/aspnetmvc/loancalculator/",
      React: "https://ej2.syncfusion.com/showcase/react/loancalculator/"
    },
    GitHubLink: {
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-loan-calculator",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-loan-calculator",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-loan-calculator",
      ASPNETCore: "https://github.com/syncfusion/ej2-showcase-aspnetcore-loan-calculator",
      ASPNETMVC: "https://github.com/syncfusion/ej2-showcase-aspnetmvc-loan-calculator",
      React: "https://github.com/syncfusion/ej2-showcase-react-loan-calculator"
    },
    BgColor: "#EFEFFF",
    Platforms: ["TypeScript", "Angular", "JavaScript", "ASPNETCore", "ASPNETMVC", "React"]
  },
  {
    Header: "Health Tracker",
    Content: "Track and visualize the calories consumed and daily activities like steps taken, water consumption and sleeping duration.",
    ImagePath: "./images/Showcase_Images/Health_Tracker.png",
    DemoUrls: {
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/healthtracker/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/healthtracker/src/#/dashboard"
    },
    GitHubLink: {
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-healthtracker",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-healthtracker"
    },
    BgColor: "#FEEBEB",
    Platforms: ["TypeScript", "Angular"]
  },
  {
    Header: "Appointment Planner",
    Content: "An appointment scheduling application for doctors in a clinic to manage their appointments with patients.",
    ImagePath: "./images/Showcase_Images/Appointment_Planner.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/",
      React: "https://ej2.syncfusion.com/showcase/react/appointmentplanner/#/dashboard"
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-appointment-planner",
      React: "https://github.com/syncfusion/ej2-showcase-react-appointment-planner"
    },
    BgColor: "#EFEFFF",
    Platforms: ["Angular", "React"]
  },
  {
    Header: "Stock Chart",
    Content: "Track and visualize stock price of any company over a specific period using charting and range tools.",
    ImagePath: "./images/Showcase_Images/Stock_chart.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/stockchart/"
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-stockchart"
    },
    BgColor: "#FEEBEB",
    Platforms: ["Angular"]
  },
  {
    Header: "IT Asset Management",
    Content: "Track and visualize software and hardware assets of an organization.",
    ImagePath: "./images/Showcase_Images/Angular.png",
    DemoUrls: {
      Vue: "https://ej2.syncfusion.com/showcase/vue/assetmanagement/"
    },
    GitHubLink: {
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-asset-management"
    },
    BgColor: "#E8F4FF",
    Platforms: ["Vue"]
  },
  {
    Header: "Fitness Tracker",
    Content: "Track and visualize your daily activities, as well as diet and fasting information, in relation to your weight loss journey.",
    ImagePath: "./images/Showcase_Images/fitness_tracker.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/fitness-tracker-app/",
      React: "https://ej2.syncfusion.com/showcase/react/fitness-tracker-app/"
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-fitness-application",
      React: "https://github.com/syncfusion/ej2-showcase-react-fitness-application"
    },
    BgColor: "#FEEBEB",
    Platforms: ["Angular", "React"]
  },
  {
    Header: "BPMN Viewer and Editor",
    Content: "Create your own business process model, that is a graphical representation and share it across your organization and industry to improve your business process.",
    ImagePath: "./images/Showcase_Images/BPMN_editor.png",
    DemoUrls: {
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/bpmn-editor/index.html",
      Angular: "https://ej2.syncfusion.com/showcase/angular/bpmn-editor/",
      React: "https://ej2.syncfusion.com/showcase/react/bpmn-editor/",
      Vue: "https://ej2.syncfusion.com/showcase/vue/bpmneditor/"
    },
    GitHubLink: {
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-bpmn-editor",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-bpmn-editor",
      React: "https://github.com/syncfusion/ej2-showcase-react-bpmn-editor",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-bpmn-editor"
    },
    BgColor: "#EFEFFF",
    Platforms: ["JavaScript", "Angular", "React", "Vue"]
  },
  {
    Header: "Floor Planner",
    Content: "Design and plan the layout of a floor or building, including the placement of walls, doors, windows, furniture, and other objects.",
    ImagePath: "./images/Showcase_Images/Floor_planner.png",
    DemoUrls: {
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/floor-planner/index.html",
      Vue: "https://ej2.syncfusion.com/showcase/vue/floor-planner/",
      React: "https://ej2.syncfusion.com/showcase/react/floorplanner/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/floorplanner/"
    },
    GitHubLink: {
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-floor-planner",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-floor-planner",
      React: "https://github.com/syncfusion/ej2-showcase-react-floor-planner",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-floor-planner"
    },
    BgColor: "#E8FCD4",
    Platforms: ["JavaScript","Vue", "React", "Angular"]
  },
  {
    Header: "Logic Circuit Designer",
    Content: "Design and simulate digital logic circuits using a wide range of logic gates, input and output components to better visualize and understand how it works, and share your design with others.",
    ImagePath: "./images/Showcase_Images/Logic_Circuit.png",
    DemoUrls: {
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/logic-circuit/index.html",
      React: "https://ej2.syncfusion.com/showcase/react/logic-circuit/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/logic-circuit/",
      Vue: "https://ej2.syncfusion.com/showcase/vue/logiccircuit/"
    },
    GitHubLink: {
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-logic-circuit-designer",
      React: "https://github.com/syncfusion/ej2-showcase-react-logic-circuit-designer",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-logic-circuit-designer",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-logic-circuit-designer"
    },
    BgColor: "#E9F4FF",
    Platforms: ["JavaScript", "React", "Angular", "Vue"]
  },
  {
    Header: "Mind Map Maker",
    Content: "A mind map, a type of spider diagram, is a visual tool that helps you discover the relationship between each concept and structured information.",
    ImagePath: "./images/Showcase_Images/Mindmap.png",
    DemoUrls: {
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/mind-map/index.html",
      Angular: "https://ej2.syncfusion.com/showcase/angular/mind-map/",
      React: "https://ej2.syncfusion.com/showcase/react/mind-map/"
    },
    GitHubLink: {
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-mindmap",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-mindmap",
      React: "https://github.com/syncfusion/ej2-showcase-react-mindmap"
    },
    BgColor: "#FEEBEB",
    Platforms: ["JavaScript", "Angular", "React"]
  },
  {
    Header: "Org Chart Creator",
    Content: "An organizational chart is a diagram that visually conveys a company's internal structure by detailing the roles, responsibilities, and relationships between individuals within an entity.",
    ImagePath: "./images/Showcase_Images/org_chart.png",
    DemoUrls: {
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/organizational-chart/index.html",
      React: "https://ej2.syncfusion.com/showcase/react/organizationalchart/",
      Angular: "https://ej2.syncfusion.com/showcase/angular/organizationalchart/",
      Vue: "https://ej2.syncfusion.com/showcase/vue/organizationalchart/"
    },
    GitHubLink: {
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-organizational-chart",
      React: "https://github.com/syncfusion/ej2-showcase-react-organizational-chart",
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-organizational-chart",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-organizational-chart"
    },
    BgColor: "#FEEBEB",
    Platforms: ["JavaScript", "React", "Angular", "Vue"]
  },
  {
    Header: "Hotel Booking",
    Content: "An application that allows hotels to manage their customers room reservations.",
    ImagePath: "./images/Showcase_Images/hotel_booking.png",
    DemoUrls: {
      React: "https://ej2.syncfusion.com/showcase/react/hotelbooking/"
    },
    GitHubLink: {
      React: "https://github.com/syncfusion/ej2-showcase-react-hotel-booking"
    },
    BgColor: "#FAECFC",
    Platforms: ["React"]
  },
  {
    Header: "Sprint Management",
    Content: "Sprint Task Management.",
    ImagePath: "./images/Showcase_Images/Sprint_Management.png",
    DemoUrls: {
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/sprintmanagement/"
    },
    GitHubLink: {
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-sprint-management"
    },
    BgColor: "#FEEBEB",
    Platforms: ["TypeScript"]
  },
  {
    Header: "Document Explorer",
    Content: "File management tool that allows users to navigate, access, edit, and organize various document types, including Word, Excel, PowerPoint, PDF, and image files. It features file operations (open, edit, save, delete), sorting, filtering, and search functionalities.",
    ImagePath: "./images/Showcase_Images/Document_Explorer.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/documentexplorer/",
      React: "https://ej2.syncfusion.com/showcase/react/documentexplorer/",
      TypeScript: "https://ej2.syncfusion.com/showcase/typescript/documentexplorer/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/documentexplorer/"
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-document-explorer",
      React: "https://github.com/syncfusion/ej2-showcase-react-document-explorer",
      TypeScript: "https://github.com/syncfusion/ej2-showcase-ts-document-explorer",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-document-explorer"
    },
    BgColor: "#E9F4FF",
    Platforms: ["Angular", "React", "TypeScript", "JavaScript"]
  },
  {
    Header: "JSON and XML to Diagram Visualizer",
    Content: "JSON and XML to Diagram Visualizer is a web application designed as a powerful visualization tool for JSON and XML data formats. It transforms complex structured data into intuitive, tree-based diagram layouts.",
    ImagePath: "./images/Showcase_Images/JSONXML_To_Diagram.png",
    DemoUrls: {
      Angular: "https://ej2.syncfusion.com/showcase/angular/jsonandxmltodiagramvisualizer/",
      React: "https://ej2.syncfusion.com/showcase/react/jsonandxmltodiagramvisualizer/",
      Vue: "https://ej2.syncfusion.com/showcase/vue/jsonandxmltodiagramvisualizer/",
      JavaScript: "https://ej2.syncfusion.com/showcase/javascript/jsonandxmltodiagramvisualizer/",
    },
    GitHubLink: {
      Angular: "https://github.com/syncfusion/ej2-showcase-angular-json-xml-to-diagram-visualizer",
      React: "https://github.com/syncfusion/ej2-showcase-react-json-xml-to-diagram-visualizer",
      Vue: "https://github.com/syncfusion/ej2-showcase-vue-json-xml-to-diagram-visualizer",
      JavaScript: "https://github.com/syncfusion/ej2-showcase-js-json-xml-to-diagram-visualizer"
    },
    BgColor: "#E9F4FF",
    Platforms: ["Angular", "React", "Vue", "JavaScript"]
  }
];

export{ dataSource};