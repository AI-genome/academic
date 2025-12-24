// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-wiki",
          title: "wiki",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/wiki/index.html";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications lists.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and featured repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials and courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-may-còn-có-emmmmmmmm-datn",
        
          title: '“May còn có emmmmmmmm!” | datn <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Đợt rồi vô tình lướt lướt thấy cái phim bố già của trấn thành trên youtube… nghe nói cũng nhiều… nhưng mãi đến nay mới coi thử..",
        section: "Posts",
        handler: () => {
          
            window.open("https://dattn.com/may-con-co-em/", "_blank");
          
        },
      },{id: "post-chí-phèo-thời-datn",
        
          title: 'Chí Phèo thời @ | datn <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Hồi học ở cấp 3 trường làng, mình có nghe 1 câu quen thuộc mà mấy bạn hay nói là: ở trường NH này thì thứ nhất là quan hệ, thứ nhì là tiền tệ, còn lại thì mặc kệ : ))",
        section: "Posts",
        handler: () => {
          
            window.open("https://dattn.com/chi-pheo-thoi-at/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-research-career-begins-with-an-msc-thesis-project-in-bioinformatics-at-karolinska-insititute-sweden-sparkles-sparkles-smile-smile",
          title: 'My research career begins with an MSc thesis project in Bioinformatics at Karolinska...',
          description: "",
          section: "News",},{id: "news-msc-thesis-defense-o-i-am-now-gradudated-from-the-tel-aviv-univeristy-israel-grateful-to-all-of-my-friends-teachers-sparkles",
          title: 'MSc thesis defense :o: I am now gradudated from the Tel Aviv Univeristy,...',
          description: "",
          section: "News",},{id: "news-accepted-position-as-a-bioinformatics-scientist-at-vingroup-big-data-insititute-sparkles",
          title: 'Accepted position as a bioinformatics scientist at Vingroup Big Data Insititute :sparkles:',
          description: "",
          section: "News",},{id: "news-my-first-paper-is-published-at-bmc-bioinformatics-sparkles",
          title: 'My first paper is published at BMC Bioinformatics :sparkles:',
          description: "",
          section: "News",},{id: "news-my-kse-conference-paper-is-published",
          title: 'My KSE conference paper is published.',
          description: "",
          section: "News",},{id: "news-excited-to-be-admited-to-the-graduate-program-in-statistics-and-data-science-at-the-university-of-texas-at-austin-sparkles-sparkles",
          title: 'Excited to be admited to the graduate program in Statistics and Data Science...',
          description: "",
          section: "News",},{id: "news-lmtag-algorithm-paper-is-published-at-briefings-in-bioinformatics-sparkles",
          title: 'LmTag algorithm paper is published at Briefings in Bioinformatics :sparkles:',
          description: "",
          section: "News",},{id: "news-another-paper-is-publised-at-scientific-reports-sparkles",
          title: 'Another paper is publised at Scientific Reports :sparkles:',
          description: "",
          section: "News",},{id: "news-happy-to-be-an-co-author-of-prsup-paper-it-is-publised-at-briefings-in-bioinformatics",
          title: 'Happy to be an co-author of PRSUP paper. It is publised at Briefings...',
          description: "",
          section: "News",},{id: "news-cscqtl-is-out-in-bioinformatics-sparkles",
          title: 'cscQTL is out in Bioinformatics :sparkles:',
          description: "",
          section: "News",},{id: "news-it-is-time-to-wrap-up-2023-this-is-a-preprint-about-natural-language-inference-which-is-my-final-project-work-of-the-graduate-nlp-course-at-ut-austin-in-fall-2023",
          title: 'It is time to wrap up 2023! This is a preprint about natural...',
          description: "",
          section: "News",},{id: "news-i-finished-phd-defense-sparkles-thesis-improved-computational-methods-for-regulatory-genomic-inference",
          title: 'I finished PhD defense :sparkles: . Thesis: Improved computational methods for regulatory genomic...',
          description: "",
          section: "News",},{id: "news-completed-graduated-degree-in-statistics-and-data-science-at-the-university-of-texas-at-austin-sparkles-sparkles",
          title: 'Completed graduated degree in Statistics and Data Science at The University of Texas...',
          description: "",
          section: "News",},{id: "news-excited-to-join-the-center-of-precision-psychiatry-at-uinveristy-of-oslo-to-work-on-machine-learning-and-statistical-methods-for-human-genetics-sparkles-sparkles-sparkles",
          title: 'Excited to join the Center of Precision Psychiatry at Uinveristy of Oslo to...',
          description: "",
          section: "News",},{id: "news-deepfarm-paper-seq2fun-for-farmed-animals-is-now-published-in-nar-genomics-and-bioinformatics",
          title: '🎉 DeepFarm paper (seq2fun for farmed animals) is now published in NAR Genomics...',
          description: "",
          section: "News",},{id: "news-nf-rasqual-paper-small-size-molqtl-pipeline-is-now-online-in-bmc-genomics",
          title: '🎉 nf-rasqual paper (small size molQTL pipeline) is now online in BMC Genomics!...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/datngu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ndat", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=I594RbMAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.med.uio.no/klinmed/english/people/aca/thanhdng/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/datngu_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
