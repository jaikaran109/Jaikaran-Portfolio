<script setup lang="ts"></script>

<template>
  <section id="about" class="relative py-32">
    <div class="mx-auto max-w-6xl px-6">
      <FadeContent :duration="0.8" blur>
        <GradientText
          text="About"
          :colors="['#7877c6', '#40ffaa', '#4079ff', '#7877c6']"
          :speed="6"
          class="mb-4 text-sm font-semibold uppercase tracking-widest"
        />
      </FadeContent>

      <div class="space-y-8">
        <div>
          <h2
            class="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
          >
            Jai Karan Gupta
          </h2>

          <p class="mb-6">
            Hey! I'm <strong>Jai Karan Gupta</strong>, a Computer Science
            student specializing in
            <strong>Data Science & Artificial Intelligence</strong>, passionate
            about building useful applications, solving problems, and exploring
            emerging technologies.
          </p>

          <p class="mb-6">
            I'm primarily a <strong>Java developer</strong> with a strong
            interest in <strong>Data Structures & Algorithms</strong> and
            competitive programming. I also work with modern web technologies to
            build responsive, user-friendly applications and explore how AI and
            machine learning can solve real-world problems.
          </p>

          <TechnicalSkillsSection />

          <h3 class="text-xl font-medium text-foreground mb-4">
            Beyond Coding
          </h3>

          <ul class="list-disc list-inside space-y-3">
            <li>
              Actively participating in open-source initiatives and competitive
              programming
            </li>
            <li>
              Contributed to <strong>GirlScript Summer of Code 2026</strong>
            </li>
            <li>
              Collaborating with developers and exploring new technologies
            </li>
            <li>Sharing learning resources with the student community</li>
            <li>
              Interested in
              <strong>Machine Learning, Generative AI, and Agentic AI</strong>
            </li>
            <li>Continuously improving skills through hands-on projects</li>
          </ul>

          <h3 class="text-xl font-medium text-foreground mb-4">My Approach</h3>

          <p>
            I believe in <strong>learning by building</strong>, understanding
            concepts from the fundamentals, and writing code that solves actual
            problems. I'm always open to collaborating on interesting projects,
            contributing to open source, and connecting with people who love
            technology as much as I do.
          </p>
        </div>

        <!-- GitHub/Twitter/LinkedIn buttons could go here -->
      </div>
    </div>
  </section>
</template>
