import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Kasparro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping brands show up in AI answers, not just search results.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/platform" className="text-sm text-muted-foreground hover:text-foreground transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/app/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Try the dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Privacy</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Terms</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kasparro. Built for the AI-first era.
        </div>
      </div>
    </footer>
  );
}
