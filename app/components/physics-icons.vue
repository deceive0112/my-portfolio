<template>
  <div ref="container" class="relative w-full h-full overflow-hidden">
    <div
      v-for="icon in icons"
      :key="icon.id"
      class="absolute pointer-events-none flex items-center justify-center"
      :style="{
        left: `${icon.x}px`,
        top: `${icon.y}px`,
        transform: `translate(-50%, -50%) rotate(${icon.angle}rad)`,
        width: '90px',
        height: '90px',
      }"
    >
      <!-- CHANGED: UIcon wrapped in div, style is on parent not UIcon -->
      <UIcon :name="icon.name" class="w-full h-full" />
    </div>
  </div>
</template>

<script setup>
import Matter from 'matter-js'

const container = ref(null)
const icons = ref([])

const iconList = [
  'devicon:typescript',
  'devicon:javascript',
  'devicon:vuejs',
  'devicon:nuxtjs',
  'devicon:tailwindcss',
  'devicon:python',
  'devicon:firebase',
  'devicon:docker',
  'devicon:github',
  'devicon:flutter',
  'devicon:bun',
  'devicon:kotlin',
  'devicon:html',
  'devicon:css',
  'devicon:git',
  'devicon:vercel',
  'devicon:figma',
  'devicon:photoshop',
  'devicon:canva',
  'devicon:vscode',
  'devicon:webstorm',
  'devicon:intellij',
  'devicon:arduino',
  'devicon:wordpress',
  'devicon:libgdx',
]

let engine, runner, bodies = []

const initPhysics = () => {
  const { Engine, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter

  const W = container.value.offsetWidth
  const H = container.value.offsetHeight

  engine = Engine.create()
  runner = Runner.create()

  const ground = Bodies.rectangle(W / 2, H + 25, W, 50, { isStatic: true })
  const wallLeft = Bodies.rectangle(-25, H / 2, 50, H, { isStatic: true })
  const wallRight = Bodies.rectangle(W + 25, H / 2, 50, H, { isStatic: true })

  iconList.forEach((name, i) => {
    const x = Math.random() * (W - 80) + 40
    const body = Bodies.circle(x, -50 * i, 22, {
      restitution: 0.5,
      friction: 0.3,
    })
    body.iconName = name
    body.iconId = i
    bodies.push(body)
  })

  World.add(engine.world, [ground, wallLeft, wallRight, ...bodies])

  const mouse = Mouse.create(container.value)
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  })
  World.add(engine.world, mouseConstraint)

  Runner.run(runner, engine)

  Events.on(engine, 'afterUpdate', () => {
    icons.value = bodies.map((body) => ({
      id: body.iconId,
      name: body.iconName,
      x: body.position.x,
      y: body.position.y,
      angle: body.angle,
    }))
  })
}

onMounted(async () => {
  await nextTick()
  initPhysics()
})

onUnmounted(() => {
  if (runner) Matter.Runner.stop(runner)
  if (engine) Matter.Engine.clear(engine)
})
</script>