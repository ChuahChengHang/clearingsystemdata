const journalEntry = {
  title: "Clearing System Data",
  subtitle: "Stupid System Data, taking up so much space on my mac.",
  author: "Chuah Cheng Hang",
  date: "February 15, 2026",
  lead: "System Data are caches or other files that your Mac creates and stores to help it run more efficiently. They can include things like app caches, system logs, and other temporary files. Over time, these files can accumulate and take up a significant amount of storage space on your Mac.",
  body: [
    "This guide will teach you on how to clear System Data on your mac if it is taking up too much space.",
    "Please **CHECK BEFORE YOU DELETE ANYTHING**. Be **CAREFUL**.",
    "Let's start!"
  ],
  actions: [
    {
      title: "Go to Finder and select your user under 'Locations' in the sidebar.",
      description: "This is the user folder where your files are stored under for your account. Do **NOT** mess it up with the *computer folder*.",
      image: {
        src: "image/finder.png",
        alt: "Example finder screenshot",
        // caption: "A simple one-page roadmap example. Replace with your own image or remove this field."
      }
    },
    {
      title: "Now that you are in your user folder, press `Command + Shift + .` (period) to show hidden files.",
      description: "This should show your hidden files which are usually not shown to you for safety reasons. These files are usually not meant to be touched by users, so be careful from here onwards. I prefer to then switch it to list view to make it easier to see the file sizes.",
      image: {
        src: "image/hiddenfiles.png",
        alt: "Example hidden files screenshot",
        // caption: "Screenshot showing how to show hidden files in Finder."
      }
    },
    {
      title: "If you do not see your file sizes although you are in list view, press `Command + J` and check 'Calculate all sizes'.",
      description: "This should show your file sizes which is important for you to know which files are taking up the most space. You can also sort the files by size to see which files are taking up the most space. To do this, simply click the three dots at the top right of the Finder window and select 'Sort By' then 'Size'.",
      image: {
        src: "image/calculateall.png",
        alt: "Example calculate all sizes screenshot",
        // caption: "Example meeting invite template to use for the 30-minute sync."
      }
    },
    {
      title: "The folder that is the biggest size is usually where you should delete some of the files.",
      description: "Usually, the 'Library' folder is where most of the System Data is stored, but it can also be in other folders. You can open the folder to see which files are taking up the most space and delete them if you researched and know that they are safe to delete. You can also search online for the file names to see if they are safe to delete. Be **CAREFUL** when deleting files, as some of them may be important for your system to run properly. If you are not sure about a file, it is better to leave it alone or do more research on it before deleting it.\n\n **PLEASE RESEARCH BEFORE DELETING ANY FILES, IF YOU DELETE THE WRONG FILES, IT CAN CAUSE PROBLEMS FOR YOUR SYSTEM.**",
      image: {
        src: "image/files.png",
        alt: "Example files screenshot",
        // caption: "Example meeting invite template to use for the 30-minute sync."
      }
    },
    {
      title: "Expand the folders and look for the files that are taking up the most space and delete them if you researched and know that they are safe to delete.",
      description: "Usually the files that you can delete are in either of the three folders circled, which are Application Support, Developer and Caches. However, it can also be in other folders, so be sure to check the file sizes and do your research before deleting any files. You can also search online for the file names to see if they are safe to delete. **DO NOT DELETE IF YOU'RE UNSURE AND PLEASE MAKE SURE YOU RESEARCH AS MOST OF THE FILES THAT YOU CAN DELETE ARE SPECIFIC FOLDERS!!**",
      image: {
        src: "image/bigfiles.png",
        alt: "Example files screenshot",
        // caption: "Example meeting invite template to use for the 30-minute sync."
      }
    }
  ]
};

export default journalEntry;
