$(document).ready(function () {
  general_utils();
  blog_posts();
});

function general_utils() {
  // smooth scrolling for nav links
  $(".head-menu-wrap a").smoothScroll();
  $(".extra-link a").smoothScroll();
  $(".profile-pic-link").smoothScroll();

  $(".skillbar").each(function () {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent"),
        },
        1000
      );
  });
}

function blog_posts() {
  // keeping it static, can be fetched from a blog dynamically as well
  let posts = [
    {
      url: "https://zammanboss.tistory.com/4",
      title: "[SOLID] 객체 지향 5가지 원칙",
    },
    {
      url: "https://zammanboss.tistory.com/3",
      title:
        "[알고리즘 #1] 유클리드 호제법 & 확장 유클리드 호제법 쉽게 이해하기",
    },
    {
      url: "https://zammanboss.tistory.com/8",
      title: "동형암호",
    },
    {
      url: "https://zammanboss.tistory.com/14",
      title: "메타버스",
    },
    {
      url: "https://zammanboss.tistory.com/23",
      title: "계단 오르기 Java 자바",
    },
  ];

  let post_html = [];

  for (let post of posts) {
    let tags;

    if (post.tags) {
      tags = post.tags.map((tag) => {
        return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`;
      });
    }

    let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3>${post.title}</h3>           

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

    post_html.push(post_template);
  }

  // for the more posts link
  let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://zammanboss.tistory.com');">

        <div class="blog-link">

            <h3>Visit the blog for more posts</h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

  post_html.push(post_template);

  $("#rss-feeds").html(post_html);
}

function blog_link_click(url) {
  window.open(url, "_blank");
}
