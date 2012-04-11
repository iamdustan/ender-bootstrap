/* ===================================================
 * bootstrap-transition.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function( $ ) {

  $.domReady(function () {

    "use strict"

    /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
     * ======================================================= */

    // quick check to make sure support object exists
    $.support = $.support || {}
    
    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , transitions = 'transition WebkitTransition MozTransition OTransition MsTransition'.split(' ')
          
          // transition end events from https://developer.mozilla.org/en/CSS/CSS_transitions#Browser_compatibility
        , transitionEnd = 'TransitionEnd webkitTransitionEnd transitionend oTransitionend MSTransitionEnd'.split(' ')
        , i = transitions.length
        , support = false
      while (i--) {
        if (transitions[i] in thisStyle) {
          support = transitions[i]
          transitionEnd = transitionEnd[i]
          break
        }
      }

      return support && { end: transitionEnd }
  
    })()
  })
}(require('ender-bootstrap-base'))