// svg 타입 선언
declare module "*.svg" {
  const src: React.FC<React.SVGProps<SVGElement>>;
  export default src;
}
