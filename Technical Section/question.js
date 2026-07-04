const questionData = {
  dsa: [
    {
      question: "What is Data Structure?",
      difficulty: "Easy",
      answer:
        "A Data Structure is a way of organizing and storing data efficiently so that operations like searching, inserting, deleting and updating can be performed quickly.",
    },

    {
      question: "What is an Array?",
      difficulty: "Easy",
      answer:
        "An Array is a collection of elements stored at contiguous memory locations where each element is accessed using its index.",
    },

    {
      question: "Difference between Array and Linked List?",
      difficulty: "Medium",
      answer:
        "Arrays use contiguous memory and provide O(1) random access, while Linked Lists use non-contiguous memory and provide efficient insertion/deletion but slow random access.",
    },

    {
      question: "What is a Stack?",
      difficulty: "Easy",
      answer:
        "A Stack is a linear data structure that follows the LIFO (Last In First Out) principle.",
    },

    {
      question: "Applications of Stack?",
      difficulty: "Medium",
      answer:
        "Function calls, recursion, expression evaluation, undo operation, browser history and backtracking.",
    },

    {
      question: "What is a Queue?",
      difficulty: "Easy",
      answer:
        "A Queue follows FIFO (First In First Out). Elements are inserted from the rear and removed from the front.",
    },

    {
      question: "Difference between Stack and Queue?",
      difficulty: "Easy",
      answer: "Stack follows LIFO while Queue follows FIFO.",
    },

    {
      question: "What is a Circular Queue?",
      difficulty: "Medium",
      answer:
        "A Circular Queue connects the last position back to the first to efficiently utilize memory.",
    },

    {
      question: "What is a Deque?",
      difficulty: "Medium",
      answer:
        "Deque (Double Ended Queue) allows insertion and deletion from both front and rear.",
    },

    {
      question: "What is Time Complexity?",
      difficulty: "Easy",
      answer:
        "Time Complexity measures how the running time of an algorithm increases with input size.",
    },

    {
      question: "What is Space Complexity?",
      difficulty: "Easy",
      answer:
        "Space Complexity measures the amount of memory required by an algorithm with respect to input size.",
    },
    {
      question: "What is Binary Search?",
      difficulty: "Easy",
      answer:
        "Binary Search is a searching algorithm that works on sorted arrays by repeatedly dividing the search interval into half. Its time complexity is O(log n).",
    },

    {
      question: "What is Linear Search?",
      difficulty: "Easy",
      answer:
        "Linear Search checks each element one by one until the required element is found. Its time complexity is O(n).",
    },

    {
      question: "Difference between Linear Search and Binary Search?",
      difficulty: "Medium",
      answer:
        "Linear Search works on both sorted and unsorted arrays with O(n) complexity, whereas Binary Search requires a sorted array and works in O(log n).",
    },

    {
      question: "What is DFS?",
      difficulty: "Medium",
      answer:
        "Depth First Search (DFS) explores a branch completely before backtracking. It is implemented using recursion or a stack and has O(V + E) complexity.",
    },

    {
      question: "Difference between BFS and DFS?",
      difficulty: "Hard",
      answer:
        "BFS uses a queue and finds the shortest path in unweighted graphs, whereas DFS uses a stack or recursion and explores one branch deeply before backtracking.",
    },

    {
      question: "What is Dynamic Programming?",
      difficulty: "Hard",
      answer:
        "Dynamic Programming is an optimization technique that solves overlapping subproblems by storing previously computed results to avoid redundant calculations.",
    },

    {
      question: "What is Greedy Algorithm?",
      difficulty: "Medium",
      answer:
        "A Greedy Algorithm makes the locally optimal choice at each step with the hope of finding a global optimum.",
    },

    {
      question: "What is Two Pointer Technique?",
      difficulty: "Medium",
      answer:
        "The Two Pointer technique uses two indices moving through a data structure to solve problems efficiently, often reducing time complexity.",
    },

    {
      question: "What is Sliding Window Technique?",
      difficulty: "Hard",
      answer:
        "Sliding Window maintains a subset of elements while moving across an array or string, allowing many problems to be solved in O(n) time.",
    },
  ],

  cpp: [
    {
      question: "What is C++?",
      difficulty: "Easy",
      answer:
        "C++ is a general-purpose, object-oriented programming language developed by Bjarne Stroustrup. It is an extension of the C language and supports procedural, object-oriented, and generic programming.",
    },

    {
      question: "What is an Object?",
      difficulty: "Easy",
      answer:
        "An object is an instance of a class that occupies memory and can access the class members.",
    },

    {
      question: "What is the difference between Class and Object?",
      difficulty: "Easy",
      answer:
        "A class is a blueprint, whereas an object is a real instance of that blueprint.",
    },

    {
      question: "Can a Constructor be overloaded?",
      difficulty: "Medium",
      answer:
        "Yes. C++ supports constructor overloading, allowing multiple constructors with different parameter lists.",
    },

    {
      question: "What is this pointer?",
      difficulty: "Medium",
      answer:
        "The 'this' pointer is a hidden pointer available inside every non-static member function. It points to the current object.",
    },

    {
      question: "What is a Friend Function?",
      difficulty: "Medium",
      answer:
        "A friend function is not a member of the class but can access its private and protected members.",
    },

    {
      question: "What is Inheritance?",
      difficulty: "Easy",
      answer:
        "Inheritance is an OOP concept where one class acquires the properties and behaviors of another class, promoting code reusability.",
    },

    {
      question: "Types of Inheritance?",
      difficulty: "Medium",
      answer:
        "Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance.",
    },

    {
      question: "What is Polymorphism?",
      difficulty: "Easy",
      answer:
        "Polymorphism allows the same function name or operator to perform different tasks depending on the context.",
    },

    {
      question: "Types of Polymorphism?",
      difficulty: "Medium",
      answer:
        "Compile-time polymorphism (Function Overloading, Operator Overloading) and Runtime polymorphism (Function Overriding using Virtual Functions).",
    },

    {
      question: "What is a Pointer?",
      difficulty: "Easy",
      answer:
        "A pointer is a variable that stores the memory address of another variable.",
    },

    {
      question: "What is a Null Pointer?",
      difficulty: "Easy",
      answer:
        "A null pointer is a pointer that does not point to any valid memory location. It is represented using nullptr in modern C++.",
    },

    {
      question: "What is the difference between Pointer and Reference?",
      difficulty: "Medium",
      answer:
        "A pointer stores an address and can be null or reassigned, whereas a reference is an alias of an existing variable and cannot be null or changed after initialization.",
    },

    {
      question: "What is Dynamic Memory Allocation?",
      difficulty: "Medium",
      answer:
        "Dynamic Memory Allocation allows memory to be allocated during runtime using the 'new' operator and released using the 'delete' operator.",
    },

    {
      question: "What is a Memory Leak?",
      difficulty: "Medium",
      answer:
        "A memory leak occurs when dynamically allocated memory is not released using delete, causing unnecessary memory consumption.",
    },

    {
      question: "What is a Virtual Function?",
      difficulty: "Medium",
      answer:
        "A virtual function enables runtime polymorphism. It allows the derived class function to be called through a base class pointer.",
    },

    {
      question: "What is a Pure Virtual Function?",
      difficulty: "Hard",
      answer:
        "A pure virtual function is declared using '= 0'. It makes the class abstract and forces derived classes to implement that function.",
    },

    {
      question: "What is the difference between Shallow Copy and Deep Copy?",
      difficulty: "Hard",
      answer:
        "Shallow copy copies memory addresses, whereas deep copy creates a completely independent copy of dynamically allocated resources.",
    },

    {
      question: "What is a Static Data Member?",
      difficulty: "Easy",
      answer:
        "A static data member is shared among all objects of a class. Only one copy exists regardless of the number of objects.",
    },
    {
      question: "What is Runtime Polymorphism?",
      difficulty: "Hard",
      answer:
        "Runtime polymorphism is achieved using virtual functions where the function call is resolved during program execution instead of compile time.",
    },
  ],

  dbms: [
    {
      question: "What is DBMS?",
      difficulty: "Easy",
      answer:
        "DBMS (Database Management System) is software used to create, manage, retrieve, update, and organize data efficiently. Examples include MySQL, PostgreSQL, Oracle, and SQL Server.",
    },

    {
      question: "What is Database?",
      difficulty: "Easy",
      answer:
        "A database is an organized collection of related data that can be stored, accessed, modified, and managed efficiently.",
    },

    {
      question: "Difference between DBMS and RDBMS?",
      difficulty: "Easy",
      answer:
        "DBMS stores data without enforcing relationships between tables, whereas RDBMS stores data in related tables using keys and follows relational principles.",
    },

    {
      question: "What is a Candidate Key?",
      difficulty: "Medium",
      answer:
        "A Candidate Key is any column or combination of columns that can uniquely identify a record. One candidate key is chosen as the primary key.",
    },

    {
      question: "What is a Super Key?",
      difficulty: "Medium",
      answer:
        "A Super Key is a set of one or more columns that uniquely identifies each row in a table.",
    },

    {
      question: "What is a Foreign Key?",
      difficulty: "Easy",
      answer:
        "A Foreign Key is a column that creates a relationship between two tables by referencing the Primary Key of another table.",
    },

    {
      question: "What is an Alternate Key?",
      difficulty: "Medium",
      answer:
        "Candidate Keys that are not selected as the Primary Key are called Alternate Keys.",
    },
    {
      question: "What is NULL?",
      difficulty: "Easy",
      answer:
        "NULL represents a missing, unknown or undefined value in a database. It is different from zero or an empty string.",
    },

    {
      question: "What is a Composite Key?",
      difficulty: "Medium",
      answer:
        "A Composite Key is a key formed using two or more columns together to uniquely identify a record.",
    },

    {
      question: "What are Constraints?",
      difficulty: "Easy",
      answer:
        "Constraints are rules applied to table columns to maintain data integrity. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK and DEFAULT.",
    },

    {
      question: "What is BCNF?",
      difficulty: "Hard",
      answer:
        "Boyce-Codd Normal Form (BCNF) is a stronger version of 3NF where every determinant must be a candidate key.",
    },

    {
      question: "What are ACID Properties?",
      difficulty: "Hard",
      answer:
        "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and consistent database transactions.",
    },
    {
      question: "What is a Transaction?",
      difficulty: "Easy",
      answer:
        "A transaction is a sequence of one or more SQL operations executed as a single unit of work. It either completes successfully or is rolled back.",
    },

    {
      question: "What is a Clustered Index?",
      difficulty: "Hard",
      answer:
        "A Clustered Index stores the actual table data in sorted order based on the indexed column. A table can have only one clustered index.",
    },

    {
      question: "What is a Non-Clustered Index?",
      difficulty: "Hard",
      answer:
        "A Non-Clustered Index stores index values separately from the table data and points to the actual records. A table can have multiple non-clustered indexes.",
    },

    {
      question: "What is a Stored Procedure?",
      difficulty: "Hard",
      answer:
        "A Stored Procedure is a precompiled collection of SQL statements stored in the database and executed whenever required.",
    },

    {
      question: "What is a Trigger?",
      difficulty: "Hard",
      answer:
        "A Trigger is a special stored program that automatically executes when events like INSERT, UPDATE or DELETE occur on a table.",
    },
    {
      question: "What are Aggregate Functions in SQL?",
      difficulty: "Easy",
      answer:
        "Aggregate functions perform calculations on multiple rows and return a single value. Common functions are COUNT(), SUM(), AVG(), MIN() and MAX().",
    },

    {
      question: "What is EXISTS?",
      difficulty: "Hard",
      answer:
        "EXISTS checks whether a subquery returns at least one row. It stops execution as soon as a matching row is found.",
    },

    {
      question: "What is Data Integrity?",
      difficulty: "Easy",
      answer:
        "Data Integrity ensures that the data stored in the database remains accurate, consistent and reliable throughout its lifecycle.",
    },
  ],

  os: [
    {
      question: "What is an Operating System?",
      difficulty: "Easy",
      answer:
        "An Operating System (OS) is system software that manages computer hardware, software resources and provides an interface between the user and the computer.",
    },

    {
      question: "What are the main functions of an Operating System?",
      difficulty: "Easy",
      answer:
        "The main functions include process management, memory management, file management, device management, security and resource allocation.",
    },

    {
      question: "What is a Process?",
      difficulty: "Easy",
      answer:
        "A process is a program that is currently being executed. It has its own memory space, registers and execution state.",
    },

    {
      question: "What is a Thread?",
      difficulty: "Easy",
      answer:
        "A thread is the smallest unit of execution inside a process. Multiple threads of the same process share memory and resources.",
    },

    {
      question: "Difference between Process and Thread?",
      difficulty: "Medium",
      answer:
        "A process has its own memory and resources, whereas threads share the memory of the parent process. Creating threads is faster and less expensive than creating processes.",
    },

    {
      question: "What is Multitasking?",
      difficulty: "Easy",
      answer:
        "Multitasking is the ability of an operating system to execute multiple tasks apparently at the same time.",
    },

    {
      question: "What is Multiprocessing?",
      difficulty: "Medium",
      answer:
        "Multiprocessing uses two or more CPUs to execute multiple processes simultaneously, improving performance and reliability.",
    },

    {
      question: "What is Multithreading?",
      difficulty: "Medium",
      answer:
        "Multithreading allows multiple threads of the same process to execute concurrently, improving CPU utilization and responsiveness.",
    },

    {
      question: "What is Context Switching?",
      difficulty: "Medium",
      answer:
        "Context Switching is the process of saving the state of one process/thread and loading the state of another so that CPU execution can switch between them.",
    },

    {
      question: "What is CPU Scheduling?",
      difficulty: "Easy",
      answer:
        "CPU Scheduling is the process of selecting the next process from the ready queue for execution.",
    },

    {
      question: "What is FCFS Scheduling?",
      difficulty: "Easy",
      answer:
        "First Come First Serve (FCFS) executes processes in the order they arrive. It is simple but may suffer from the convoy effect.",
    },

    {
      question: "What is SJF Scheduling?",
      difficulty: "Medium",
      answer:
        "Shortest Job First (SJF) selects the process with the smallest execution time first, reducing average waiting time.",
    },

    {
      question: "What is Round Robin Scheduling?",
      difficulty: "Medium",
      answer:
        "Round Robin scheduling assigns a fixed time quantum to each process and executes them in a circular order.",
    },

    {
      question: "What is Priority Scheduling?",
      difficulty: "Medium",
      answer:
        "Priority Scheduling executes processes based on their priority. Higher-priority processes are executed before lower-priority ones.",
    },

    {
      question: "What is a Ready Queue?",
      difficulty: "Easy",
      answer:
        "The Ready Queue contains processes that are ready to execute and waiting for CPU allocation.",
    },

    {
      question: "What is Throughput?",
      difficulty: "Medium",
      answer:
        "Throughput is the number of processes completed by the CPU in a given amount of time.",
    },

    {
      question: "What is Turnaround Time?",
      difficulty: "Medium",
      answer:
        "Turnaround Time is the total time taken from process submission to process completion.",
    },

    {
      question: "What is Waiting Time?",
      difficulty: "Easy",
      answer:
        "Waiting Time is the total time a process spends waiting in the ready queue before getting CPU time.",
    },

    {
      question: "What is Response Time?",
      difficulty: "Medium",
      answer:
        "Response Time is the time between submitting a request and receiving the first response from the system.",
    },

    {
      question: "What is Starvation?",
      difficulty: "Medium",
      answer:
        "Starvation occurs when a process waits indefinitely because higher-priority processes continuously receive CPU time.",
    },
  ],

  cn: [
    {
      question: "What is Computer Network?",
      difficulty: "Easy",
      answer:
        "A Computer Network is a collection of interconnected devices that communicate and share data and resources with each other.",
    },

    {
      question: "What is the OSI Model?",
      difficulty: "Easy",
      answer:
        "The OSI (Open Systems Interconnection) Model is a 7-layer reference model used to understand and standardize network communication.",
    },

    {
      question: "What is the TCP/IP Model?",
      difficulty: "Easy",
      answer:
        "The TCP/IP Model is the practical networking model used on the Internet. It consists of four layers: Application, Transport, Internet and Network Access.",
    },

    {
      question: "Difference between OSI and TCP/IP Model?",
      difficulty: "Medium",
      answer:
        "OSI has 7 layers and is a reference model, whereas TCP/IP has 4 layers and is the practical model used on the Internet.",
    },

    {
      question: "Difference between TCP and UDP?",
      difficulty: "Medium",
      answer:
        "TCP is connection-oriented, reliable and guarantees data delivery, whereas UDP is connectionless, faster and does not guarantee delivery.",
    },

    {
      question: "What is an IP Address?",
      difficulty: "Easy",
      answer:
        "An IP Address is a unique numerical address assigned to a device on a network for identification and communication.",
    },

    {
      question: "What is a MAC Address?",
      difficulty: "Easy",
      answer:
        "A MAC Address is a unique physical address assigned to a network interface card (NIC) by the manufacturer.",
    },

    {
      question: "Difference between IP Address and MAC Address?",
      difficulty: "Medium",
      answer:
        "An IP Address is a logical address that can change depending on the network, whereas a MAC Address is a permanent physical address assigned to the network device.",
    },

    {
      question: "What is DNS?",
      difficulty: "Medium",
      answer:
        "DNS (Domain Name System) translates human-readable domain names like google.com into IP addresses.",
    },

    {
      question: "What is DHCP?",
      difficulty: "Medium",
      answer:
        "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration details to devices.",
    },

    {
      question: "Difference between Hub, Switch and Router?",
      difficulty: "Hard",
      answer:
        "A Hub broadcasts data to all devices, a Switch forwards data only to the intended device using MAC addresses, and a Router connects different networks using IP addresses.",
    },

    {
      question: "What is HTTP and HTTPS?",
      difficulty: "Medium",
      answer:
        "HTTP is a protocol used for transferring web pages, whereas HTTPS is the secure version of HTTP that encrypts data using SSL/TLS.",
    },

    {
      question: "What is the Three-Way Handshake?",
      difficulty: "Hard",
      answer:
        "The TCP Three-Way Handshake establishes a reliable connection using three steps: SYN, SYN-ACK and ACK.",
    },

    {
      question: "What is a Firewall?",
      difficulty: "Medium",
      answer:
        "A Firewall is a security system that monitors and filters incoming and outgoing network traffic based on predefined security rules.",
    },

    {
      question: "Difference between IPv4 and IPv6?",
      difficulty: "Hard",
      answer:
        "IPv4 uses 32-bit addresses and supports about 4.3 billion addresses, whereas IPv6 uses 128-bit addresses, providing a vastly larger address space along with improved security and efficiency.",
    },
  ],

  oops: [
    {
      question: "What is Object-Oriented Programming (OOP)?",
      difficulty: "Easy",
      answer:
        "Object-Oriented Programming (OOP) is a programming paradigm based on objects that contain data (attributes) and methods (functions). It improves code reusability, security and maintainability.",
    },

    {
      question: "What are the four pillars of OOP?",
      difficulty: "Easy",
      answer:
        "The four pillars of OOP are Encapsulation, Abstraction, Inheritance and Polymorphism.",
    },

    {
      question: "What is a Class?",
      difficulty: "Easy",
      answer:
        "A class is a blueprint or template that defines the properties (data members) and behaviors (member functions) of objects.",
    },

    {
      question: "What is an Object?",
      difficulty: "Easy",
      answer:
        "An object is an instance of a class. It represents a real-world entity and occupies memory.",
    },

    {
      question: "What is Encapsulation?",
      difficulty: "Medium",
      answer:
        "Encapsulation is the process of binding data and methods together into a single unit (class) while restricting direct access to the data using access specifiers.",
    },

    {
      question: "What is Abstraction?",
      difficulty: "Medium",
      answer:
        "Abstraction means hiding implementation details and exposing only the essential features to the user.",
    },

    {
      question: "What is Inheritance?",
      difficulty: "Medium",
      answer:
        "Inheritance allows one class to acquire the properties and methods of another class, promoting code reusability.",
    },

    {
      question: "What is Polymorphism?",
      difficulty: "Medium",
      answer:
        "Polymorphism allows the same interface or function name to perform different tasks depending on the object or context.",
    },

    {
      question:
        "Difference between Function Overloading and Function Overriding?",
      difficulty: "Hard",
      answer:
        "Function Overloading uses the same function name with different parameter lists within the same class (compile-time polymorphism), whereas Function Overriding allows a derived class to redefine a base class virtual function (runtime polymorphism).",
    },

    {
      question: "What is a Constructor?",
      difficulty: "Easy",
      answer:
        "A constructor is a special member function that is automatically called when an object is created to initialize it.",
    },

    {
      question: "What is a Destructor?",
      difficulty: "Easy",
      answer:
        "A destructor is a special member function that is automatically called when an object is destroyed to release allocated resources.",
    },

    {
      question: "What is a Virtual Function?",
      difficulty: "Hard",
      answer:
        "A virtual function enables runtime polymorphism by allowing a derived class implementation to be called through a base class pointer or reference.",
    },

    {
      question: "What is an Abstract Class?",
      difficulty: "Hard",
      answer:
        "An abstract class is a class that contains at least one pure virtual function and cannot be instantiated directly.",
    },

    {
      question: "What is the difference between Abstraction and Encapsulation?",
      difficulty: "Hard",
      answer:
        "Abstraction hides implementation details and focuses on what an object does, whereas Encapsulation hides data by restricting direct access and focuses on how data is protected.",
    },

    {
      question: "Why is OOP preferred in software development?",
      difficulty: "Medium",
      answer:
        "OOP improves code reusability, modularity, maintainability, scalability and security, making large software projects easier to develop and manage.",
    },
  ],
};