<template>
  <nav class="container mx-auto py-2 px-4 mt-4 shadow-lg">
    <ul class="flex gap-4 ">
      <li> <NuxtLink to="/" >Home</NuxtLink> </li>
      <li> <NuxtLink to="/test" >Test</NuxtLink> </li>
      <li> <NuxtLink to="/dashboard/articoli" >articoli</NuxtLink> </li>
      <li> <Darkmode /> </li>
    </ul>
  </nav>
</template>
