import { Container } from '@/components/ui/Container'
import { Loader2 } from 'lucide-react'

export default function ProjectsLoading() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
          <h2 className="text-xl font-semibold mb-2">Loading Projects...</h2>
          <p className="text-muted-foreground">Fetching project details</p>
        </div>
      </Container>
    </div>
  )
}
