//This section is where we declare our variables.
let topics = ["Multimodal representation of DH\ntext historical map network space link expressed networks links type",
              "Subjective aspect of data\nrelation sign signs kralemann lattman object qualities terms represent iconic",
              "New Interpretaions from Models of DH works\nknowledge modelled relies prior selection depends mapping intrinsic partly useful",
              "Process and structure of creating models\nmodelling objects used models semiotic use new meaning specific like"]

let colors = ['#D46A6A', '#407F7F', '#D49A6A']
let docs = ['Moretti', 'Drucker', 'Ciula & Eide']

let array = []
array[0] = [2.3, 1.6, 2.2]
array[1] = [2.2, 17.3, 5.1]
array[2] = [3.3, 1.6, 6.4]
array[3] = [20.3, 6.7, 10.8]

let spacing = 200

//This function sets up our canvas.
function setup() {
  createCanvas(800, 1000)
  //noStroke()
  noCursor()
}

//This function draws on the canvas. Each function draws something different. The functions are defined further down.
function draw() {
  background(100)

  drawTopics(topics)
  drawLegend(docs, colors)
  navigation(array)
}

//This function draws circles. The radius of each circle is determined by each variable in an array. It is called inside the navigate function.
function drawGraph(array, colors) {
for (let i = 0; i < array.length; i++) {
  //customWidth = width/array.length
  fill(colors[i])
  ellipse(width/2 + (i * 50) - 100, mouseY, array[i] * 10)
}
}

//This function lists our topics in white vertically along the canvas. The spacing between each list item is defined in the spacing variable.
function drawTopics(topics) {
  for (let i = 0; i < topics.length; i++) {
    fill(255)
    textSize(20)
    text(topics[i], 20, 200 + (i * spacing))
  }
}

//This function lists our documents at the top of the canvas.
function drawLegend(docs, colors) {
  for (let i = 0; i < docs.length; i++) {
    fill(colors[i])
    textSize(25)
    text(docs[i], 20 + (i * 200), 25)
  }
}

//This function calls the graph function. Depending on the value for mouseY, it gives draw a different array.
function navigation(array) {
  for (let i = 0; i < array.length; i++) {
    let bottom = (spacing * 1) + (i * 200)
    let top = (spacing * 2) + (i * 200)
    if (mouseY > bottom && mouseY < top) {
      drawGraph(array[i], colors)
      //fill(255)
      //text(array[i], 50, mouseY)
    }
  }
}
