$(function () {
    // 상위 메뉴 항목(1 Depth)을 마우스가 올렸을 때 서브 메뉴 활성화
    $('#pm_pc_nav_03 [role=toggle] > a').on('mouseenter', function (e) {
        var $li = $(this).parent(); // 현재 클릭된 li
        var $active = $(this).parent().parent().children('.active'); // 현재 활성화된 li

        // 모든 활성화 상태 초기화
        $active.removeClass('active');
        $('#pm_pc_nav_03 [role=toggle] > div').hide();

        // 현재 선택한 메뉴 활성화
        $li.addClass('active');
        $li.children('div').fadeIn(200); // 서브 메뉴 표시
    });

    // 메뉴에서 마우스가 떠났을 때 비활성화
    $('#pm_pc_nav_03').on('mouseleave', function () {
        $('#pm_pc_nav_03 [role=toggle]').removeClass('active');
        $('#pm_pc_nav_03 [role=toggle] > div').fadeOut(200);
    });
});
