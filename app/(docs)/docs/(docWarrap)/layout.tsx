import MainDocPage from '../main-doc-page';

export default function DocsWarrpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainDocPage>{children}</MainDocPage>;
}
