/**
 * Core (non-blog) page metadata, extracted 1:1 from avidigmi.com.
 * Block content lives in /public/content/pages/<slug>.json, fetched on demand.
 * `legacyPath` is the original WordPress URL — register a 301 from it.
 */

export type Block =
  | { type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li'; text: string }
  | { type: 'img'; src: string; alt: string };

export type ContentPageMeta = {
  slug: string;
  route: string;
  legacyPath: string;
  navLabel: string;
  title: string;
  description: string;
};

export const contentPages: ContentPageMeta[] = [
 {
  "slug": "about",
  "route": "/about",
  "legacyPath": "/about/",
  "navLabel": "קצת עלינו",
  "title": "אבי דיגמי - מומחה בבניית אתרים ודפי נחיתה, קידום אתרים SEO",
  "description": "אני אבי דיגמי, מומחה בתחום בניית אתרים ודפי נחיתה. אני עוזר לעסקים להצליח בדיגיטל וליצור אתרים שמביאים תוצאות."
 },
 {
  "slug": "contact",
  "route": "/contact",
  "legacyPath": "/contact/",
  "navLabel": "צור קשר",
  "title": "ליצירת קשר עבור - בניית אתרים ודפי נחיתה, קידום אתרים SEO לעסק שלך!",
  "description": "צרו קשר עם אבי דיגמי לקבלת ייעוץ מקצועי בנוגע לבניית אתרים ודפי נחיתה, קידום אתרים SEO ושיפור המרות לעסק שלכם. אני כאן לעזור!"
 },
 {
  "slug": "projects",
  "route": "/projects",
  "legacyPath": "/projects/",
  "navLabel": "תיק עבודות",
  "title": "פרויקטים מוצלחים של בניית אתרים ודפי נחיתה",
  "description": "גלו את הפרויקטים המובילים שביצעתי בתחום בניית אתרים ודפי נחיתה. כל פרויקט מציג פתרון מותאם אישית שמניב תוצאות. הצטרפו והפכו לסיפור הצלחה נוסף"
 },
 {
  "slug": "success-stories",
  "route": "/success-stories",
  "legacyPath": "/success-stories/",
  "navLabel": "סיפורי הצלחה",
  "title": "סיפורי הצלחה של הלקוחות שלנו - אתרים שעובדים ומביאים תוצאות",
  "description": "גלה סיפורי הצלחה של עסקים שבנו איתנו אתרי תדמית ודפי נחיתה שהפכו לגורם צמיחה אמיתי. לא סתם אתרים – אתרים שעובדים."
 },
 {
  "slug": "landing-page",
  "route": "/landing-page",
  "legacyPath": "/landing-page/",
  "navLabel": "בניית דף נחיתה",
  "title": "בניית דף נחיתה שממיר – דפי נחיתה מקצועיים לעסק | אבי דיגמי",
  "description": "מחפש דף נחיתה שממיר? אצלנו מבצעים בניית דף נחיתה מותאם אישית שמפנה ומניע את הגולשים לפעולה. רוצה לשפר המרות בעסק שלך – כל הפרטים כאן!"
 },
 {
  "slug": "website-construction",
  "route": "/website-construction",
  "legacyPath": "/website-construction/",
  "navLabel": "בניית אתרים",
  "title": "בניית אתרים מקצועיים לעסק | עיצוב אתרי וורדפרס",
  "description": "אני מתמחה בבניית אתרים מקצועיים בעיצוב אישי, בהתאמה מלאה לצרכים שלך. חוויית משתמש מצוינת, עיצוב מודרני ו-SEO שמתאים לכל מכשיר."
 },
 {
  "slug": "professional-websites",
  "route": "/professional-websites",
  "legacyPath": "/בניית-אתרים-מקצועיים/",
  "navLabel": "בניית אתרים מקצועיים",
  "title": "בניית אתרים מקצועיים – הסוד של עסקים שמובילים בגוגל",
  "description": "רוצה אתר שעובד באמת? בניית אתרים מקצועיים שמייצרים לידים איכותיים ומכירות קבועות לעסק שלך. כנס ותגלה איך אנחנו הולכים ליישם זאת בעסק שלך."
 },
 {
  "slug": "online-store",
  "route": "/online-store",
  "legacyPath": "/בניית-אתר-חנות/",
  "navLabel": "בניית אתר חנות",
  "title": "בניית אתר חנות מקצועית – הדרך למכור יותר אונליין",
  "description": "בניית אתר חנות מקצועי שמוכר 24/7. חוויית רכישה חלקה, סליקה מאובטחת ועיצוב שמגדיל מכירות – כך העסק שלך צומח אונליין."
 },
 {
  "slug": "landing-page-guide",
  "route": "/landing-page-guide",
  "legacyPath": "/בניית-דף-נחיתה/",
  "navLabel": "בניית דף נחיתה",
  "title": "בניית דף נחיתה – איך להפוך גולשים ללידים שמכניסים כסף",
  "description": "בניית דף נחיתה מקצועי היא המפתח להצלחה דיגיטלית: מסר חד, עיצוב מושך ואופטימיזציה לגוגל. גלו איך דף נחיתה שבנוי נכון מביא לקוחות לעסק שלכם."
 },
 {
  "slug": "seo",
  "route": "/seo",
  "legacyPath": "/קידום-אתרים-אורגני/",
  "navLabel": "קידום אתרים אורגני",
  "title": "קידום אורגני בגוגל – הדרך להצלחה ארוכת טווח ללא תלות בפרסום ממומן",
  "description": "קידום אורגני בגוגל מעלה את העסק שלך בתוצאות החיפוש, מחזק אמינות ומביא תוצאות לטווח ארוך – בלי לשלם על קליקים."
 },
 {
  "slug": "digital-marketing",
  "route": "/digital-marketing",
  "legacyPath": "/שיווק-דיגיטלי/",
  "navLabel": "שיווק דיגיטלי",
  "title": "שיווק דיגיטלי – הדרך להוביל את העסק שלך לצמיחה אמיתית אונליין",
  "description": "מחקר קהל, אסטרטגיה נכונה ותוכן שמוכר. גלו איך לשלב קידום אורגני, ממומן ועיצוב ממוקד כדי להביא יותר לקוחות ולהגדיל רווחים."
 },
 {
  "slug": "thank-you",
  "route": "/thank-you",
  "legacyPath": "/thank-you/",
  "navLabel": "דף תודה",
  "title": "תודה על פנייתך לאבי דיגמי – בניית אתרים וקידום בגוגל",
  "description": "הגעת לדף תודה קיבלנו את ההודעה שלך ונחזור אליך בהקדם. תוכל לקרוא עוד על השירותים שלנו בבניית אתרים, קידום אורגני בגוגל, ואופטימיזציה עסקית."
 },
 {
  "slug": "regulations",
  "route": "/regulations",
  "legacyPath": "/regulations/",
  "navLabel": "תקנון האתר",
  "title": "תקנון האתר",
  "description": "תקנון האתר: כל מה שצריך לדעת על חוקי האתר שלנו. אנו מציעים גם בניית אתרים מקצועיים וקידום אתרים אורגני להגדלת הנראות של העסק שלך."
 },
 {
  "slug": "privacy",
  "route": "/privacy",
  "legacyPath": "/מדיניות-פרטיות/",
  "navLabel": "מדיניות פרטיות",
  "title": "מדיניות פרטיות",
  "description": "מדיניות פרטיות – כל המידע על איך אנו אוספים, משתמשים ומגנים על הנתונים האישיים שלך בעת שימוש בשירותי קידום ובניית אתרים."
 },
 {
  "slug": "accessibility",
  "route": "/accessibility",
  "legacyPath": "/accessibility/",
  "navLabel": "הצהרת נגישות",
  "title": "הצהרת נגישות",
  "description": ""
 },
 {
  "slug": "project-matan-nistor",
  "route": "/project-matan-nistor",
  "legacyPath": "/עיצוב-אתר-מכירות-מתן-ניסטור/",
  "navLabel": "מתן ניסטור — אתר מכירות",
  "title": "עיצוב אתר מכירות למתן ניסטור – חנות דיגיטלית שעובדת",
  "description": "הקמה מלאה של אתר מכירות עבור מתן ניסטור – כולל עיצוב ממיר, מערכת סליקה, והתאמה לנייד. כך נראה אתר שמוכר באמת."
 },
 {
  "slug": "project-winners",
  "route": "/project-winners",
  "legacyPath": "/עיצוב-פורטל-קורס-קבוצת-winners/",
  "navLabel": "קבוצת Winners — פורטל קורסים",
  "title": "עיצוב פורטל קורסים לרון אוחנה | אתר פורטל לקבוצת Winners",
  "description": "עיצוב פורטל קורסים לרון אוחנה, מנכ\"ל קבוצת Winners – אתר חדשני עם אזור תלמידים, ספרים דיגיטליים, עמוד יועצים עם AI ועוד הפתעות ייחודיות."
 },
 {
  "slug": "project-webinar-funnel",
  "route": "/project-webinar-funnel",
  "legacyPath": "/פרויקט-דף-נחיתה-למשפך-וובינר/",
  "navLabel": "משפך וובינר לעו״ד",
  "title": "פרויקט דף נחיתה למשפך וובינר - עו\"ד",
  "description": "דף נחיתה למשפך וובינר שהקפיץ את ההכנסות של עורכת הדין מורן ליברמן פי 5 תוך חודש. עיצוב ממיר, תוכן מדויק ודף מכירה שסוגר עסקאות."
 },
 {
  "slug": "project-product-funnel",
  "route": "/project-product-funnel",
  "legacyPath": "/פרויקט-דף-נחיתה-למשפך-מכירת-מוצר/",
  "navLabel": "משפך מכירת מוצר",
  "title": "פרויקט דף נחיתה למשפך מכירת מוצר - איילה לי החלקות שיער",
  "description": ""
 },
 {
  "slug": "david-vatin",
  "route": "/david-vatin",
  "legacyPath": "/david-vatin/",
  "navLabel": "דוד וטין",
  "title": "דוד וטין דף נחיתה - Avi-Digmi",
  "description": ""
 }
];

export const getContentPage = (slug: string) =>
  contentPages.find((p) => p.slug === slug);

export async function loadPageBlocks(slug: string): Promise<Block[]> {
  const res = await fetch(`/content/pages/${slug}.json`);
  if (!res.ok) throw new Error(`page content not found: ${slug}`);
  const data = (await res.json()) as { blocks: Block[] };
  return data.blocks;
}

/** legacy WordPress URL -> new route, for 301 redirects */
export const legacyRedirects: Record<string, string> = Object.fromEntries(
  contentPages.map((p) => [p.legacyPath, p.route]),
);
