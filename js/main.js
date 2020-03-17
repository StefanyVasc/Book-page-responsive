let nCount = selector => {
  $(selector).each(function() {
    $(this).animate(
      {
        Counter: $(this).text()
      },
      {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element.
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function(value) {
          $(this).text(Math.ceil(value));
        }
      }
    );
  });
};
