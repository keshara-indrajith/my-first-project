<script>
document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('.header').offsetHeight;
    var links = document.querySelectorAll('a[href*="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                var targetOffset = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
</script>
