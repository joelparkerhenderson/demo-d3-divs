var height = 200
var width = 500
var data = [
	    { "class" : "topLeft", 
	      "top" : 10 + "px",
	      "left" : 10 + "px",
	      "backgroundColor" : "yellow" },

	    { "class" : "topRight",
	      "top" : 10 + "px",
	      "left" : 10 + width + "px",
	      "backgroundColor" : "blue" },

	    { "class" : "bottomLeft",
	      "top" : 10 + height + "px",
	      "left" : 10 + "px",
	      "backgroundColor" : "red" },

	    { "class" : "bottomRight",
	      "top" : 10 + height + "px",
	      "left" : 10 + width + "px",
	      "backgroundColor" : "green" }
                     ]

    var body = d3.select('body')
    .selectAll('div')
    .data(data).enter()
    .append('div')
    .attr('class', function (d) { return d.class; })
    .style('position','absolute')
    .style('top', function (d) { return d.top; })
    .style('left', function (d) { return d.left; })
    .style('width', width + "px")
    .style('height', height + "px")
    .style('background-color', function (d) { return d.backgroundColor; })
    // add mouseover effect to change background color to black
    .on('mouseover', function() {
            d3.select(this)
            .style('background-color','black')
        })
    .on('mouseout', function () {
            d3.select(this)
            .style('background-color', function (d) { return d.backgroundColor; })
        })
