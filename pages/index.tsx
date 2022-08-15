import { GradientLayout } from '@/components/GradientLayout'

export default function Home() {
  return (
    <GradientLayout
      image="/images/me.jpg"
      subtitle="profile"
      title="Sean OReilly"
      description="15 public playlists"
      roundImage
      color="green"
    >
      <div>home page</div>
    </GradientLayout>
  )
}
