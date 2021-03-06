paddle = Sprite('images/paddle.png')
paddle.size = 20
paddle.goto(Screen.width/2, Screen.height - 50)

ball = Sprite('images/ball.png')
ball.size = 20
ball.goto(paddle.x, paddle.y - 20)

level = Level()
level.setTileSize(60, 30)
level.setTile('r', 'images/block-red.png')
level.setTile('g', 'images/block-green.png')
level.setTile('b', 'images/block-blue.png')
level.setTile('y', 'images/block-yellow.png')
level.setTile('p', 'images/block-purple.png')
level.setTile('w', 'images/block-grey.png', { hit: 1 })
level.load(
'r',
'rg',
'rgb',
'rgby',
'rgbyp',
'rgbypr',
'wwwwww',
)
level.draw(0, 30)

blocks = level.getSpriteList('rgbypw')

sticky = true
speedX = 3
speedY = -3
lives = 3
livesList = SpriteList()
Screen.background = '#45598b'

drawLives()

on.click(function(e) { sticky = false })

function arkanoid() {
	paddle.x = Mouse.x
	if (ball.right > Screen.right) speedX = -speedX
	if (ball.left < Screen.left) speedX = -speedX
	if (ball.top < Screen.top) speedY = -speedY
	if (ball.bottom > Screen.bottom) {
		lives--
		drawLives()
		if (lives >= 0) {
			sticky = true
			speedY = -speedY
		}
		else Ready.stop()
	}

	if (ball.touches(paddle) && speedY > 0) {
		speedX = 3 * (ball.x - paddle.x) / (paddle.width / 2)
		speedY = -speedY
	}

	var hitBlock = ball.touches(blocks)
	if (hitBlock) {
		speedY = -speedY
		if (hitBlock.hit == 1) {
			hitBlock.hit = 0
			hitBlock.transparency = 0.5
		}
		else {
			hitBlock.remove()
		}
	}

	if (sticky)
		ball.goto(paddle.x, paddle.y - 20)
	else
		ball.move(speedX, speedY)
}

repeat(arkanoid)

function drawLives() {
  livesList.clear()
	repeat(lives, function(i) {
		life = Sprite('images/ball.png')
		life.size = 10
		life.goto(i * 15 + 15, Screen.bottom - 15)
		livesList.add(life)
	})
}
