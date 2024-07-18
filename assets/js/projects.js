$(document).ready(() => {
  render_projects("featured");
});

let render_projects = (slug) => {
  let projects_area = $(".projects-wrapper");

  $(".white-button").removeClass("white-button-hover");
  $(`#${slug}`).addClass("white-button-hover");

  let projects_obj = [
    {
      image: "assets/images/말해Vr.png",
      link: "https://github.com/limzzum/SayVr",
      title: "영어 회화 학습 웹 서비스",
      demo: "",
      technologies: ["SpringBoot", "Java", "JPA", "RabbitMq"],
      description:
        "영어 학습을 위한 단어장, 스터디, 쉐도잉, 매칭 게임, 잔디 관리 등의 서비스를 제공해준다.",
      categories: ["featured", "web"],
    },
    {
      image: "assets/images/공연리뷰앱.jpeg",
      link: "https://github.com/limzzum/miniproject",
      title: "나만의 공연 리뷰 앱",
      demo: "",
      technologies: ["Flutter", "Dart"],
      description:
        "공연 리뷰 작성 앱 입니다. 뮤지컬, 연극, 영화 등 자신의 리뷰를 기록하여 저장할 수 있습니다.",
      categories: ["featured", "app"],
    },
    {
      image: "assets/images/제주머니.png",
      link: "https://github.com/limzzum/prejeju",
      title: "제주 여행 경비 예측",
      demo: "",
      technologies: ["html", "css"],
      description:
        "여행 일정에 맞춰 항공권 가격, 음식점 가격 등을 선택하여 제주여행 경비 예측을 해주는 사이트이다.",
      categories: ["web"],
    },
    {
      image: "assets/images/환경다이어리.png",
      link: "https://github.com/limzzum/GuruProject",
      title: "환경 다이어리",
      demo: false,
      technologies: ["Android", "Kotlin"],
      description: "환경 보호 미션들을 수행하고 기록하는 다이어리.",
      categories: ["app"],
    },
    {
      image: "assets/images/MFC.png",
      link: "https://github.com/limzzum/MFC",
      title: "토론 승패 판단 서비스",
      demo: false,
      technologies: ["SpringBoot", "Java", "Web Socket"],
      description:
        "WebRTC를 이용한 웹 토론 서비스로, 욕설 인식과 관전자 투표 등을 통해 승패가 결정된다.",
      categories: ["featured", "web"],
    },
    {
      image: "assets/images/Nova.png",
      link: "https://github.com/NOVA-App/NOVA",
      title: "노후 자산 시뮬레이션",
      demo: false,
      technologies: ["SpringBoot", "JPA", "Spring Security"],
      description:
        "주식, 적금 등 27세부터 60세까지 자산을 운용해보며 노후에 어느정도의 생활을 할 수 있을지 시뮬레이션을 통해 예측해볼 수 있다.",
      categories: ["featured", "app"],
    },
    {
      image: "assets/images/반쪽.png",
      link: "https://github.com/limzzum/banjjog.git",
      title: "내 반쪽 연인과의 궁합 확인",
      demo: false,
      technologies: ["React", "Typescript", "Web/App"],
      description:
        "문답을 통해 연인과 나의 가치관이 얼마나 일치하는지, 서로에 대해 얼마나 알고 있는지 확인해 볼 수 있다.",
      categories: ["app", "web"],
    },
    {
      image: "assets/images/potato.png",
      link: "https://github.com/potathon/team1-backend",
      title: "가상 면접 시뮬레이션",
      demo: false,
      technologies: ["SpringBoot", "JPA", "OpenAI", "#해커톤"],
      description:
        "개발자에게 필요한 지식들을 묻는 가상면접을 통해 내 답변을 확인&기록 하고, 다른 사람들과 공유할 수 있다.",
      categories: ["web"],
    },
  ];

  let projects = [];
  if (slug == "all") {
    projects = projects_obj.map(project_mapper);
  } else {
    projects = projects_obj
      .filter((project) => project.categories.includes(slug))
      .map(project_mapper);
  }
  projects_area.hide().html(projects).fadeIn();
};

let project_mapper = (project) => {
  return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${
                  project.image
                    ? `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
                    : ""
                }

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${
                          project.description
                        } ${
    project.demo ? `<a href="${project.demo}">Demo</a>` : ""
  }</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies
                          .map(
                            (tech) =>
                              `<span class="project-technology paragraph-text-normal">${tech}</span>`
                          )
                          .join("")}
                    </div>

                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
  render_projects(slug);
};
