<!-- 스크롤 시 사이드바 숨기기 시작 -->
<script>
	$(document).ready(function() {
		$("aside").addClass("aside-visible")

		var didScroll;
		$(window).scroll(function(event) {
			didScroll = true;
		});

		setInterval(function() {
			if(didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		var lastScrollTop = 0;
		var delta = 1;
		function hasScrolled() {
			var st = $(window).scrollTop();
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			if (st > lastScrollTop) {
				$("aside").addClass("aside-hidden")
				$("aside").removeClass("aside-visible")
			}
			else {
				if(st + $(window).height() < $(document).height()) {
					$("aside").addClass("aside-visible")
					$("aside").removeClass("aside-hidden")
				}
			}
			lastScrollTop = st;
		}
	});
	</script>
<!-- 스크롤 시 사이드바 숨기기 끝 -->
