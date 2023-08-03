//무한 스크롤 페이징

let page = 1;

getListPage({page: page}, appendList, showError);

$(window).on('scroll', function () {
    if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
        ++page;
        getListPage({page: page}, appendList, showError)
    }
});

function getListPage(pageInfo, appendList, error) {
    $.ajax({
        url: `/myPages/myMeeting/${pageInfo.page}`,
        type: 'get',
        dataType: 'json',
        success: function (result) {
            if (appendList) {
                appendList(result);
            }
        },
        error: error
    });
}

function appendList(map) {
    let text = '';

    if (map.activeBoardVoList.length == 0 && page == 1) {
        text = `
          <div class="community-main-box-size">
            <span>앗! 활동 내역이 없어요.😿<br/>
            활발한 활동을 통해 회원들과 소통을 나누어 보아요.</span>
              <div class="page-move-btn">
            <button class="mapage-careerinfo-path" onclick="location.href='/meeting/home'">모임 입장하기</button>
          </div>
          </div>
        `;

        $('.my-mentor-content').html(text);
    } else {

        map.activeBoardVoList.forEach(board => {
            text += `
                <a class="project-container" href="/project/read?studyNumber=${board.boardNumber}">
                <div class="project-box">
                  <div class="project-top">
                  ${board.boardGood != 1 ?
                `<span class="project-tag">스터디</span>` : `<span class="project-tag">프로젝트</span>`
            }
                    <span class="project-title">${board.boardTitle}</span>
                  </div>
                  <span class="project-content">${board.boardContent}</span>
                  <div class="project-bottom">
                    <div class="project-icon">
                      <div class="select-count-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(148, 155, 160)" class="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        <span class="select-count">${board.boardCnt}</span>
                      </div>
                      <div class="project-like-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(148, 155, 160)" class="bi bi-heart" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        <span class="project-like">${board.boardLike}</span>
                      </div>
                    </div>
                    <span class="project-purpose">${board.boardDate}</span>
                  </div>
                </div>
              </a>
        `;
        });
        $('.my-mentor-content').append(text);
    }
}

function showError(a, b, c) {
    console.log(c);
}