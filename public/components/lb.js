var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;

var LB = function LB() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      liked = _useState2[0],
      setLiked = _useState2[1];

  if (liked) {
    return 'You liked this.';
  }

  /**
  return e(
     'button',
     { className: "btn btn-primary", onClick: () => setLiked(true) },
     'Like'
   ); 
  **/

  return React.createElement(
    "button",
    { className: "btn btn-primary", onClick: function onClick() {
        setLiked(true);
      } },
    "Like"
  );
};

export default LB;