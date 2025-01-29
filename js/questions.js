// Debugging: Ensure questions.js loads properly
console.log("✅ questions.js loaded successfully!");

// Creating an array of questions with multiple-choice answers
let questions = [
    {
        numb: 1,
        question: "Which components in your computer store data? (Choose three.)",
        answer: ["RAM", "SSD", "BD-ROM"],  // Multi-answer question
        options: [
            "RAM",
            "SSD",
            "PCI",
            "PSU",
            "BD-ROM"
        ]
    },
    {
        numb: 2,
        question: "What type of expansion card allows your computer to talk to other computers without wires?",
        answer: "NIC",  // Single-answer question
        options: [
            "Modem",
            "NIC",
            "PSU",
            "PCIe"
        ]
    },
    {
        numb: 3,
        question: "Which type of expansion slot provides the fastest data transfer speeds?",
        answer: "PCIe x16",
        options: [
            "PCI",
            "PCIe x1",
            "PCIe x16",
            "PCIe x64"
        ]
    },
    {
        numb: 4,
        question: "Which of the following optical discs will store the most data?",
        answer: "BD-ROM",
        options: [
            "CD-ROM",
            "DVD-ROM DL",
            "DVD-ROM DS",
            "BD-ROM"
        ]
    },
    {
        numb: 5,
        question: "Data needs to be stored on a computer, and access speed is the most important factor. What is the best option?",
        answer: "RAM",
        options: [
            "Database",
            "RAM",
            "SSD",
            "HDD"
        ]
    },
    {
        numb: 6,
        question: "Your friend Joe wants to add another hard drive to his computer. What should he check to ensure his system supports it?",
        answer: "PSU",
        options: [
            "PSU",
            "Expansion slots",
            "CPU",
            "RAM"
        ]
    },
    {
        numb: 7,
        question: "If a user wants to play live-action video games, which component should they upgrade first?",
        answer: "GPU",
        options: [
            "CPU",
            "GPU",
            "PSU",
            "NVMe"
        ]
    },
    {
        numb: 8,
        question: "You want to upgrade your computer to improve boot time and file storage. What should you purchase?",
        answer: "SSD",
        options: [
            "RAM",
            "HDD",
            "SSD",
            "CPU"
        ]
    },
    {
        numb: 9,
        question: "If your computer runs low on RAM, what will it use instead?",
        answer: "Virtual memory",
        options: [
            "Cache",
            "SSD",
            "Optical drive",
            "Virtual memory"
        ]
    },
    {
        numb: 10,
        question: "Order the storage unit sizes from largest to smallest.",
        answer: "TB, GB, MB, KB",
        options: [
            "MB, KB, GB, TB",
            "KB, MB, GB, PB",
            "TB, GB, MB, KB",
            "PB, GB, TB, MB"
        ]
    },
    {
        numb: 11,
        question: "When you turn on your computer, it tells you that it does not have the time and date set and asks you to enter setup. What likely needs to be replaced?",
        answer: "CMOS battery",
        options: [
            "CMOS battery",
            "BIOS chip",
            "CPU",
            "Time controller"
        ]
    },
    {
        numb: 12,
        question: "A user named Monika wants to upgrade the memory in her laptop. What type of memory will she need?",
        answer: "SODIMM",
        options: [
            "DIMM",
            "SODIMM",
            "DDR5",
            "DDR4"
        ]
    },
    {
        numb: 13,
        question: "Which device is connected to the motherboard with a 24-pin block connector?",
        answer: "PSU",
        options: [
            "HDD",
            "SSD",
            "RAM",
            "PSU"
        ]
    },
    {
        numb: 14,
        question: "Which of the following are connectors for internal storage devices? (Choose two.)",
        answer: ["SATA", "M.2"],
        options: [
            "SATA",
            "HHD",
            "SSD",
            "M.2",
            "NVMe"
        ]
    },
    {
        numb: 15,
        question: "Which of the following processor types is most likely to be found in a smartphone?",
        answer: "ARM",
        options: [
            "32-bit",
            "GPU",
            "Intel",
            "ARM"
        ]
    },
    {
        numb: 16,
        question: "You just installed more memory in your computer, but it’s not recognized. Your friend suggests that you upgrade your BIOS. What’s the best way to do this?",
        answer: "Flash the BIOS",
        options: [
            "Order a new BIOS chip from the motherboard manufacturer",
            "Order a new BIOS chip from the memory manufacturer",
            "Flash the BIOS",
            "You can’t upgrade a BIOS"
        ]
    },
    {
        numb: 17,
        question: "Which component inside a computer produces the most heat?",
        answer: "CPU",
        options: [
            "PSU",
            "CPU",
            "GPU",
            "RAM"
        ]
    },
    {
        numb: 18,
        question: "Which of the following are non-volatile data storage options for user data? (Choose two.)",
        answer: ["SSD", "HDD"],
        options: [
            "SSD",
            "HDD",
            "RAM",
            "ROM"
        ]
    },
    {
        numb: 19,
        question: "Your boss wants you to justify your suggestion to purchase solid-state hard drives. What are advantages of solid-state drives (Choose three.)",
        answer: ["Faster than HDDs", "Generate less heat than HDDs", "Quieter than HDDs"],
        options: [
            "Faster than HDDs",
            "Generate less heat than HDDs",
            "Quieter than HDDs",
            "Cheaper than HDDs"
        ]
    },
    {
        numb: 20,
        question: "Which of the following are communications devices for computers? (Choose two.)",
        answer: ["NIC", "Modem"],
        options: [
            "NIC",
            "Modem",
            "PCIe",
            "Sound card"
        ]
    },
    {
        numb: 21,
        question: "What type of connector is commonly used for video and audio in televisions and home theater systems?",
        answer: "HDMI",  // Single-answer question
        options: [
            "USB",
            "VGA",
            "HDMI",
            "DVI"
        ]
    },
    {
        numb: 22,
        question: "Which type of computer memory is used to store the BIOS settings?",
        answer: "CMOS",  // Single-answer question
        options: [
            "RAM",
            "ROM",
            "CMOS",
            "Cache"
        ]
    },
    {
        numb: 23,
        question: "Which of the following technologies uses the least power while operating?",
        answer: "SSD",  // Single-answer question
        options: [
            "HDD",
            "SSD",
            "USB",
            "RAM"
        ]
    },
    {
        numb: 24,
        question: "Which of these ports can transfer data at speeds exceeding 10 Gbps?",
        answer: "Thunderbolt",  // Single-answer question
        options: [
            "USB 3.0",
            "Thunderbolt",
            "USB 2.0",
            "HDMI"
        ]
    },
    {
        numb: 25,
        question: "Which of the following is the most important factor for an upgraded gaming PC?",
        answer: "GPU",  // Single-answer question
        options: [
            "CPU",
            "GPU",
            "RAM",
            "SSD"
        ]
    },
    {
        numb: 26,
        question: "What is the most commonly used connector for printers in modern-day PCs?",
        answer: "USB",  // Single-answer question
        options: [
            "Parallel",
            "Serial",
            "USB",
            "PS/2"
        ]
    },
    {
        numb: 27,
        question: "Which type of display technology provides the best color accuracy?",
        answer: "OLED",  // Single-answer question
        options: [
            "LED",
            "LCD",
            "OLED",
            "Plasma"
        ]
    },
    {
        numb: 28,
        question: "What is the maximum resolution supported by DisplayPort 1.4?",
        answer: "8K",  // Single-answer question
        options: [
            "4K",
            "1080p",
            "8K",
            "1440p"
        ]
    },
    {
        numb: 29,
        question: "Which network standard provides the fastest wireless connection?",
        answer: "Wi-Fi 6",  // Single-answer question
        options: [
            "Wi-Fi 4",
            "Wi-Fi 5",
            "Wi-Fi 6",
            "Wi-Fi 3"
        ]
    },
    {
        numb: 30,
        question: "What type of device is commonly used to extend a wired network to a wireless one?",
        answer: "Router",  // Single-answer question
        options: [
            "Switch",
            "Router",
            "Hub",
            "Modem"
        ]
    },
    {
        numb: 31,
        question: "Which of these devices typically uses the largest amount of power?",
        answer: "GPU",  // Single-answer question
        options: [
            "CPU",
            "GPU",
            "PSU",
            "HDD"
        ]
    },
    {
        numb: 32,
        question: "Which cable standard is used for Gigabit Ethernet connections?",
        answer: "Cat 5e",  // Single-answer question
        options: [
            "Cat 5",
            "Cat 5e",
            "Cat 6",
            "Cat 7"
        ]
    },
    {
        numb: 33,
        question: "What does the acronym SSD stand for?",
        answer: "Solid-State Drive",  // Single-answer question
        options: [
            "Solid-State Disk",
            "Solid-State Drive",
            "Sequential Storage Device",
            "Solid Storage Disk"
        ]
    },
    {
        numb: 34,
        question: "What does a GPU stand for in the context of a computer?",
        answer: "Graphics Processing Unit",  // Single-answer question
        options: [
            "Graphics Processing Unit",
            "General Purpose Unit",
            "General Processing Unit",
            "Graphics Peripheral Unit"
        ]
    },
    {
        numb: 35,
        question: "Which type of connector is used for video and audio signals in modern TVs?",
        answer: "HDMI",  // Single-answer question
        options: [
            "VGA",
            "DVI",
            "HDMI",
            "USB"
        ]
    },
    {
        numb: 36,
        question: "Which device would you most commonly use to troubleshoot network connectivity?",
        answer: "Network cable tester",  // Single-answer question
        options: [
            "Network cable tester",
            "Multimeter",
            "Oscilloscope",
            "Crimper"
        ]
    },
    {
        numb: 37,
        question: "Which of the following connectors would be used for an analog video signal?",
        answer: "VGA",  // Single-answer question
        options: [
            "HDMI",
            "VGA",
            "USB",
            "DVI"
        ]
    },
    {
        numb: 38,
        question: "Which device uses the most power in a desktop PC?",
        answer: "CPU",  // Single-answer question
        options: [
            "CPU",
            "GPU",
            "HDD",
            "PSU"
        ]
    },
    {
        numb: 39,
        question: "Which of the following connectors is used for audio and video signals?",
        answer: "HDMI",  // Single-answer question
        options: [
            "VGA",
            "USB",
            "HDMI",
            "Ethernet"
        ]
    },
    {
        numb: 40,
        question: "Which of the following is the fastest data transfer standard for external hard drives?",
        answer: "Thunderbolt 3",  // Single-answer question
        options: [
            "USB 2.0",
            "USB 3.0",
            "Thunderbolt 3",
            "FireWire 800"
        ]
    },
    {
        numb: 41,
        question: "Using an Android phone, you want to scroll down. What do you do to accomplish this?",
        answer: "Swipe up",  // Single-answer question
        options: [
            "Swipe up",
            "Swipe down",
            "Pinch fingers together",
            "Start with pinched fingers and separate them"
        ]
    },
    {
        numb: 42,
        question: "For which of the following tasks are gaming consoles not used? (Choose two.)",
        answer: ["Editing Word documents", "Creating a spreadsheet"],  // Multi-answer question
        options: [
            "Playing video games",
            "Editing Word documents",
            "Watching a DVD",
            "Creating a spreadsheet"
        ]
    },
    {
        numb: 43,
        question: "Which motion while using an iPhone allows you to zoom in on a map?",
        answer: "Reverse pinch",  // Single-answer question
        options: [
            "Tap",
            "Double tap",
            "Pinch",
            "Reverse pinch"
        ]
    },
    {
        numb: 44,
        question: "You want a device to hold files for several users to access on a network. What type of device do you need?",
        answer: "Server",  // Single-answer question
        options: [
            "File console",
            "Tablet",
            "Server",
            "Workstation"
        ]
    },
    {
        numb: 45,
        question: "Rachel is using her iPad to view pictures. She turns the iPad 90 degrees and the image turns as well. Which sensor allowed this to happen?",
        answer: "Gyroscope",  // Single-answer question
        options: [
            "Accelerometer",
            "Magnetometer",
            "Turnometer",
            "Gyroscope"
        ]
    },
    {
        numb: 46,
        question: "Which type of IoT device is used to control the temperature in a home?",
        answer: "Thermostat",  // Single-answer question
        options: [
            "Thermostat",
            "Security system",
            "Home appliance",
            "Command center"
        ]
    },
    {
        numb: 47,
        question: "Francis is trying to change the settings on his iPhone. He opens the Settings app. In order to see them better, he turns his phone 90 degrees but nothing happens. What is the most likely cause?",
        answer: "The Settings app does not support rotation",  // Single-answer question
        options: [
            "The gyroscope is broken.",
            "The Settings app does not support rotation.",
            "He needs to enable app rotation in Settings first.",
            "He needs to turn off the device and turn it back on to reset the rotation feature."
        ]
    },
    {
        numb: 48,
        question: "What is the term used that refers to connecting two Bluetooth devices together for communications?",
        answer: "Pairing",  // Single-answer question
        options: [
            "Synching",
            "Netting",
            "Pairing",
            "Partnering"
        ]
    },
    {
        numb: 49,
        question: "Agi has an iPhone with a biometric scanner enabled. What methods can she use to unlock her phone?",
        answer: "Fingerprint or passcode",  // Single-answer question
        options: [
            "Fingerprint only",
            "Passcode only",
            "Fingerprint or passcode",
            "Fingerprint, passcode, or iris scan"
        ]
    },
    {
        numb: 50,
        question: "Which of the following is a required hardware device to use augmented reality?",
        answer: "Smartphone",  // Single-answer question
        options: [
            "AR headset",
            "Earbuds/headphones",
            "Smartphone",
            "Display"
        ]
    },
    {
        numb: 51,
        question: "Your friend recently got a new Android phone and comes over to your house. What app does your friend use to set up a Wi-Fi connection with your wireless router?",
        answer: "Settings",  // Single-answer question
        options: [
            "Wi-Fi",
            "Settings",
            "Networking",
            "Connections"
        ]
    },
    {
        numb: 52,
        question: "Which one of the following devices is likely to have the least amount of storage space?",
        answer: "Smartphone",  // Single-answer question
        options: [
            "Smartphone",
            "Laptop",
            "Workstation",
            "Server"
        ]
    },
    {
        numb: 53,
        question: "You are setting up a new Wi-Fi connection on your Android phone. What step do you take after turning on Wi-Fi?",
        answer: "Locate SSID",  // Single-answer question
        options: [
            "Verify wireless capabilities.",
            "Enter the wireless password.",
            "Verify the Internet connection.",
            "Locate SSID."
        ]
    },
    {
        numb: 54,
        question: "You want to enable backups of your new iPhone. Which two options do you have? (Choose two.)",
        answer: ["iCloud", "iTunes"],  // Multi-answer question
        options: [
            "iDrive",
            "iCloud",
            "iTunes",
            "iBackup"
        ]
    },
    {
        numb: 55,
        question: "A pacemaker is an example of what type of IoT device?",
        answer: "Medical device",  // Single-answer question
        options: [
            "Medical device",
            "Home appliance",
            "Security system",
            "IP camera"
        ]
    },
    {
        numb: 56,
        question: "Which of the following accurately describes what Airplane mode does on an iPhone?",
        answer: "Turns off the cellular connection",  // Single-answer question
        options: [
            "Turns off the Wi-Fi connection",
            "Turns off the Bluetooth connection",
            "Turns off the cellular connection",
            "Turns off all wireless connections"
        ]
    },
    {
        numb: 57,
        question: "Which IoT device is typically paired with security systems?",
        answer: "IP camera",  // Single-answer question
        options: [
            "Home appliance",
            "IP camera",
            "Vehicle",
            "Thermostat"
        ]
    },
    {
        numb: 58,
        question: "You need to find a new productivity app for your Android-based tablet. Where should you look?",
        answer: "Google Play",  // Single-answer question
        options: [
            "iTunes",
            "Google Drive",
            "Google Apps",
            "Google Play"
        ]
    },
    {
        numb: 59,
        question: "An Xbox Series X is an example of which type of device?",
        answer: "Gaming console",  // Single-answer question
        options: [
            "Laptop",
            "Tablet",
            "Gaming console",
            "Server"
        ]
    },
    {
        numb: 60,
        question: "Rebecca wants to get a copy of the newest game she heard about for her iPad. Where should she go to find and download it?",
        answer: "Google Play",  // Single-answer question
        options: [
            "iTunes",
            "iApps",
            "iPlay",
            "Google Play"
        ]
    },
    {
        numb: 61,
        question: "Which of the following is not a function of an operating system?",
        answer: "Monitor system health",
        options: [
            "Interface between the user and the machine",
            "Coordinate software applications",
            "Coordinate hardware components",
            "Monitor system health"
        ]
    },
    {
        numb: 62,
        question: "Which of the following desktop operating systems can you freely modify if you choose?",
        answer: "Linux",
        options: [
            "macOS",
            "iOS",
            "Android",
            "Linux"
        ]
    },
    {
        numb: 63,
        question: "Peter, a friend of yours, has a piece of software that was written for macOS. Which of the following OSs will that software run on?",
        answer: "macOS only",
        options: [
            "macOS only",
            "macOS and Linux",
            "macOS and ChromeOS",
            "macOS, Linux, and ChromeOS"
        ]
    },
    {
        numb: 64,
        question: "Your friend Michael has purchased a Chromebook and wants to know where his files are stored. What do you tell him?",
        answer: "In the cloud",
        options: [
            "On the hard drive",
            "In the system RAM",
            "In the cloud",
            "Chromebooks do not store files"
        ]
    },
    {
        numb: 65,
        question: "You just deleted a shortcut to an important work presentation. What happened to the data in the presentation?",
        answer: "It’s in the Recycle Bin/Trash.",
        options: [
            "Nothing.",
            "The file was removed from the work directory and placed in the Projects directory.",
            "The file was not moved, but a new pointer record was created associating the file with the Projects directory.",
            "The file was copied to a new location on the hard drive and was associated with the Projects directory."
        ]
    },
    {
        numb: 66,
        question: "Which of the following file systems can you not rename a file when it's open?",
        answer: "NTFS",
        options: [
            "ext3",
            "ext4",
            "APFS",
            "NTFS"
        ]
    },
    {
        numb: 67,
        question: "You are going to purchase a new iPhone. Which operating system will be installed on it?",
        answer: "iOS",
        options: [
            "iOS",
            "OS X",
            "iPhone OS",
            "Android"
        ]
    },
    {
        numb: 68,
        question: "Fred, a friend of yours, wants to host a website for his new company. Which type of OS should be on the computer hosting the website?",
        answer: "Server",
        options: [
            "Embedded",
            "Mobile",
            "Server",
            "Workstation"
        ]
    },
    {
        numb: 69,
        question: "Which of the following is not a feature of a file system?",
        answer: "Access control",
        options: [
            "Permissions",
            "Encryption",
            "Journaling",
            "Access control"
        ]
    },
    {
        numb: 70,
        question: "Linux is defined as a ______________, which is also the core of an operating system.",
        answer: "Kernel",
        options: [
            "Distribution",
            "Version",
            "Kernel",
            "Shell"
        ]
    },
    {
        numb: 71,
        question: "You need to kill a process in Windows. Which utility should you use?",
        answer: "Task Manager",
        options: [
            "Task Manager",
            "Process Manager",
            "File Explorer",
            "Programs and Features"
        ]
    },
    {
        numb: 72,
        question: "You just copied a file from the work directory to the Projects directory on your Windows PC. What happened to the file on the hard drive?",
        answer: "The file was copied to a new location on the hard drive and was associated with the Projects directory.",
        options: [
            "Nothing.",
            "The file was removed from the work directory and placed in the Projects directory.",
            "The file was not moved, but a new pointer record was created associating the file with the Projects directory.",
            "The file was copied to a new location on the hard drive and was associated with the Projects directory."
        ]
    },
    {
        numb: 73,
        question: "Your hard drive is running low on space. Which of the following could help alleviate that situation?",
        answer: "Compression",
        options: [
            "Compression",
            "Encryption",
            "Attribution",
            "Journaling"
        ]
    },
    {
        numb: 74,
        question: "The combination of Linux-based files that gets released as a product is called what?",
        answer: "Distribution",
        options: [
            "Distribution",
            "Version",
            "Kernel",
            "Source"
        ]
    },
    {
        numb: 75,
        question: "Which of the following items does Windows Task Manager allow you to manage? (Choose two.)",
        answer: ["Drivers", "Services"],
        options: [
            "Drivers",
            "Interfaces",
            "Processes",
            "Services"
        ]
    },
    {
        numb: 76,
        question: "You need to prepare a brand-new replacement hard drive for storage. What is the first step needed to get it ready?",
        answer: "Create a partition",
        options: [
            "Format the drive",
            "Install an OS",
            "Install a file system",
            "Create a partition"
        ]
    },
    {
        numb: 77,
        question: "You need to update a Windows driver for a sound card. Which utility should you use?",
        answer: "Device Manager",
        options: [
            "Device Manager",
            "Sound Card Manager",
            "Drivers app",
            "Control Panel"
        ]
    },
    {
        numb: 78,
        question: "Which of the following would not be considered metadata for a spreadsheet file?",
        answer: "Calculations inside the file",
        options: [
            "Read-only attribute",
            "Calculations inside the file",
            "Name of the file",
            "File size"
        ]
    },
    {
        numb: 79,
        question: "You want to keep a co-worker, Jerry, from accessing a file. What should you use to do this?",
        answer: "Permissions",
        options: [
            "Permissions",
            "Read-only",
            "Archive",
            "Compression"
        ]
    },
    {
        numb: 80,
        question: "You just deleted a shortcut to an important work presentation. What happened to the data in the presentation?",
        answer: "It’s in the Recycle Bin/Trash.",
        options: [
            "Nothing.",
            "The file was removed from the work directory and placed in the Projects directory.",
            "The file was not moved, but a new pointer record was created associating the file with the Projects directory.",
            "The file was copied to a new location on the hard drive and was associated with the Projects directory."
        ]
    },
];