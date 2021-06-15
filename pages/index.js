import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Border Radius Issue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="min-h-screen flex flex-col items-center justify-center space-y-8">     
            <div class="h-40 w-40 rounded-r-xl rounded-l-full bg-red-400 flex items-center justify-center p-4 text-center">rounded-r-xl has no effect</div>
            <div class="h-40 w-40 rounded-l-xl rounded-r-50 bg-green-400 flex items-center justify-center bg-yellow-400 p-4 text-center">Work-around for square elements</div>
        </div>        
    </div>
  )
}
