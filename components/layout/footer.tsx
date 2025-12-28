import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Kasparro</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Helping brands show up in AI answers, not just search results.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/platform" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/app/dashboard" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Try the dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-400">Privacy</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-400">Terms</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Kasparro. Built for the AI-first era.
        </div>
      </div>
    </footer>
  );
}