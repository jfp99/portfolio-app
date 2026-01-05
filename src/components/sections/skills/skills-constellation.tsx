"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "ai" | "devops" | "tools";
  level: number; // 1-100
  description: string;
  icon?: string;
}

const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "frontend", level: 95, description: "Building complex UIs with hooks, context, and modern patterns" },
  { id: "nextjs", name: "Next.js", category: "frontend", level: 95, description: "Full-stack React framework with App Router and Server Components" },
  { id: "typescript", name: "TypeScript", category: "frontend", level: 90, description: "Type-safe development with strict mode and advanced types" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: 92, description: "Utility-first CSS for rapid, responsive design" },
  { id: "framer", name: "Framer Motion", category: "frontend", level: 85, description: "Production-ready animations and gestures" },

  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", level: 88, description: "Server-side JavaScript with async/await patterns" },
  { id: "mcp", name: "MCP Protocol", category: "backend", level: 95, description: "Model Context Protocol for AI tool integration" },
  { id: "mongodb", name: "MongoDB", category: "backend", level: 82, description: "Document database design and optimization" },
  { id: "redis", name: "Redis", category: "backend", level: 78, description: "In-memory caching and real-time data" },

  // AI
  { id: "claude", name: "Claude AI", category: "ai", level: 95, description: "Deep integration with Anthropic's Claude API" },
  { id: "openai", name: "OpenAI", category: "ai", level: 85, description: "GPT models, embeddings, and function calling" },
  { id: "langchain", name: "LangChain", category: "ai", level: 80, description: "Building AI chains and agents" },
  { id: "prompts", name: "Prompt Engineering", category: "ai", level: 92, description: "Crafting effective prompts for optimal AI responses" },

  // DevOps
  { id: "vercel", name: "Vercel", category: "devops", level: 90, description: "Deployment, edge functions, and analytics" },
  { id: "git", name: "Git", category: "devops", level: 88, description: "Version control and collaboration workflows" },
  { id: "docker", name: "Docker", category: "devops", level: 75, description: "Containerization for consistent environments" },

  // Tools
  { id: "n8n", name: "n8n", category: "tools", level: 88, description: "Workflow automation and integrations" },
  { id: "vscode", name: "VS Code", category: "tools", level: 95, description: "Primary IDE with custom configurations" },
];

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  frontend: { bg: "bg-spinach-500/10", border: "border-spinach-500/30", text: "text-spinach-600 dark:text-spinach-400" },
  backend: { bg: "bg-spinach-500/10", border: "border-spinach-500/30", text: "text-spinach-600 dark:text-spinach-400" },
  ai: { bg: "bg-spinach-500/15", border: "border-spinach-500/40", text: "text-spinach-600 dark:text-spinach-400" },
  devops: { bg: "bg-muted", border: "border-border", text: "text-foreground" },
  tools: { bg: "bg-muted", border: "border-border", text: "text-foreground" },
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI/ML",
  devops: "DevOps",
  tools: "Tools",
};

// Define connections between related skills
const skillConnections: [string, string][] = [
  ["react", "nextjs"],
  ["react", "typescript"],
  ["nextjs", "typescript"],
  ["typescript", "nodejs"],
  ["nodejs", "mcp"],
  ["claude", "mcp"],
  ["openai", "langchain"],
  ["claude", "prompts"],
  ["n8n", "mcp"],
  ["vercel", "nextjs"],
  ["docker", "nodejs"],
];

/**
 * Skills Constellation Component
 *
 * Interactive visualization of skills as orbiting nodes.
 * Click on a skill to see details.
 */
export function SkillsConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Update container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    }
  };

  // Pre-calculate stable random delays for each skill (deterministic based on skill id)
  const skillDelays = useMemo(() => {
    const delays: Record<string, number> = {};
    skills.forEach((skill, index) => {
      // Use deterministic pseudo-random based on skill index
      delays[skill.id] = (index * 0.618033988749895) % 1 * 0.5;
    });
    return delays;
  }, []);

  // Calculate positions for skills in a constellation pattern
  const skillPositions = useMemo(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const maxRadius = Math.min(containerSize.width, containerSize.height) * 0.4;

    const categories = [...new Set(skills.map((s) => s.category))];
    const anglePerCategory = (2 * Math.PI) / categories.length;

    return skills.map((skill) => {
      const categoryIndex = categories.indexOf(skill.category);
      const skillsInCategory = skills.filter((s) => s.category === skill.category);
      const indexInCategory = skillsInCategory.indexOf(skill);
      const countInCategory = skillsInCategory.length;

      // Base angle for category
      const baseAngle = categoryIndex * anglePerCategory - Math.PI / 2;
      // Spread within category
      const spreadAngle = (indexInCategory - (countInCategory - 1) / 2) * 0.25;
      const angle = baseAngle + spreadAngle;

      // Distance from center based on skill level
      const normalizedLevel = skill.level / 100;
      const radius = maxRadius * (0.4 + normalizedLevel * 0.5);

      return {
        skill,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        size: 40 + normalizedLevel * 20,
      };
    });
  }, [containerSize]);

  return (
    <section className="relative py-24 overflow-hidden" aria-label="Skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            Skills <span className="text-spinach-500 dark:text-spinach-400">Constellation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Click on any skill to learn more. Hover over categories to highlight.
          </motion.p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                "border",
                categoryColors[key].bg,
                categoryColors[key].border,
                categoryColors[key].text,
                hoveredCategory === key && "scale-105 shadow-md"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Constellation Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative h-[500px] sm:h-[600px] rounded-3xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden"
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--spinach-500))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--spinach-500))" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {/* Lines to center */}
            {skillPositions.map(({ skill, x, y }) => (
              <motion.line
                key={`line-${skill.id}`}
                x1={containerSize.width / 2}
                y1={containerSize.height / 2}
                x2={x}
                y2={y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: hoveredCategory === null || hoveredCategory === skill.category ? 0.5 : 0.1,
                }}
                transition={{ duration: 1, delay: skillDelays[skill.id] }}
              />
            ))}

            {/* Connection lines between related skills */}
            {skillConnections.map(([skillId1, skillId2], index) => {
              const skill1 = skillPositions.find(p => p.skill.id === skillId1);
              const skill2 = skillPositions.find(p => p.skill.id === skillId2);

              if (!skill1 || !skill2) return null;

              const isHovered = hoveredSkill?.id === skillId1 || hoveredSkill?.id === skillId2;

              return (
                <motion.line
                  key={`connection-${skillId1}-${skillId2}`}
                  x1={skill1.x}
                  y1={skill1.y}
                  x2={skill2.x}
                  y2={skill2.y}
                  stroke="url(#lineGradient)"
                  strokeWidth={isHovered ? "2" : "1"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: isHovered ? 0.8 : 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    pathLength: { duration: 1.2 },
                  }}
                />
              );
            })}
          </svg>

          {/* Center Node (EPNR) */}
          <motion.div
            style={{ x: smoothMouseX, y: smoothMouseY }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-spinach-600 shadow-lg shadow-black/10">
              <span className="text-2xl font-bold text-white">E</span>
            </div>
          </motion.div>

          {/* Skill Nodes */}
          {skillPositions.map(({ skill, x, y, size }, index) => (
            <motion.button
              key={skill.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: hoveredCategory === null || hoveredCategory === skill.category ? 1 : 0.3,
                scale: 1,
                x: x - size / 2,
                y: y - size / 2,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
              }}
              whileHover={{ scale: 1.2, zIndex: 20 }}
              onClick={() => setSelectedSkill(skill)}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ width: size, height: size }}
              className={cn(
                "absolute flex items-center justify-center rounded-full",
                "border-2 transition-all duration-200 cursor-pointer",
                categoryColors[skill.category].bg,
                categoryColors[skill.category].border,
                "hover:shadow-lg"
              )}
            >
              <span className={cn("text-xs font-medium", categoryColors[skill.category].text)}>
                {skill.name.length > 8 ? skill.name.slice(0, 6) + "..." : skill.name}
              </span>
            </motion.button>
          ))}

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute z-30 pointer-events-none"
                style={{
                  left: skillPositions.find(p => p.skill.id === hoveredSkill.id)?.x,
                  top: skillPositions.find(p => p.skill.id === hoveredSkill.id)?.y,
                  transform: 'translate(-50%, -120%)',
                }}
              >
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn("text-sm font-semibold", categoryColors[hoveredSkill.category].text)}>
                      {hoveredSkill.name}
                    </span>
                    <span className={cn("text-xs px-2 py-1 rounded-full", categoryColors[hoveredSkill.category].bg, categoryColors[hoveredSkill.category].text)}>
                      {hoveredSkill.level}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{hoveredSkill.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Orbital Rings (decorative) */}
          {[0.35, 0.55, 0.75].map((scale, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: i * 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-muted-foreground/30"
              style={{
                width: containerSize.width * scale,
                height: containerSize.height * scale,
              }}
            />
          ))}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl",
                      categoryColors[selectedSkill.category].bg,
                      categoryColors[selectedSkill.category].border,
                      "border-2"
                    )}
                  >
                    <span className={cn("text-lg font-bold", categoryColors[selectedSkill.category].text)}>
                      {selectedSkill.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedSkill.name}</h3>
                    <p className={cn("text-sm", categoryColors[selectedSkill.category].text)}>
                      {categoryLabels[selectedSkill.category]}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{selectedSkill.description}</p>

                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Proficiency</span>
                    <span className="text-muted-foreground">{selectedSkill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-full rounded-full bg-spinach-500"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SkillsConstellation;
