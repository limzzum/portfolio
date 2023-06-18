$(document).ready(() => {
  render_projects("featured");
});

let render_projects = (slug) => {
  let projects_area = $(".projects-wrapper");

  $(".white-button").removeClass("white-button-hover");
  $(`#${slug}`).addClass("white-button-hover");

  let projects_obj = [
    {
      image: "assets/images/mentors.jpg",
      link: "https://github.com/limzzum/miniproject",
      title: "flutter App",
      demo: "",
      technologies: ["Flutter", "Dart"],
      description:
        "공연 리뷰 작성 앱 입니다. 뮤지컬, 연극, 영화 등 자신의 리뷰를 기록하여 저장할 수 있습니다.",
      categories: ["featured", "app"],
    },
    {
      image: "assets/images/mobile-landscape.jpg",
      link: "https://github.com/limzzum/prejeju",
      title: "제주 여행 경비 예측",
      demo: "",
      technologies: ["html", "css"],
      description:
        "여행 일정에 맞춰 항공권 가격, 음식점 가격 등을 선택하여 제주여행 경비 예측을 해주는 사이트이다.",
      categories: ["featured", "web"],
    },
    {
      image: "assets/images/collage.jpg",
      link: "https://github.com/limzzum/GuruProject",
      title: "환경 다이어리",
      demo: false,
      technologies: ["Android", "Kotlin"],
      description: "환경 보호 미션들을 수행하고 기록하는 다이어리.",
      categories: ["featured", "app"],
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
