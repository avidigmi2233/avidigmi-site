import { useState, type FormEvent } from 'react';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { contactSubjects } from '@/data/site';

/**
 * Lead form — mirrors the original Elementor form on avidigmi.com
 * (שם מלא / דוא״ל / טלפון / נושא הפניה / הודעה).
 *
 * INTEGRATION NOTE for the Lovable agent:
 * create a `leads` table in Supabase and insert the payload below, e.g.
 *   create table public.leads (
 *     id uuid primary key default gen_random_uuid(),
 *     full_name text not null, email text not null, phone text not null,
 *     subject text, message text, created_at timestamptz default now()
 *   );
 * plus an RLS policy allowing anonymous INSERT only.
 * Then replace `submitLead` with the supabase insert call.
 */

type LeadPayload = {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

async function submitLead(payload: LeadPayload): Promise<void> {
  // TODO(agent): replace with
  //   const { error } = await supabase.from('leads').insert(payload);
  //   if (error) throw error;
  // eslint-disable-next-line no-console
  console.info('lead', payload);
  await new Promise((r) => setTimeout(r, 600));
}

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [subject, setSubject] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: LeadPayload = {
      full_name: String(data.get('full_name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      subject,
      message: String(data.get('message') ?? '').trim(),
    };

    setPending(true);
    try {
      await submitLead(payload);
      toast({
        title: 'הפנייה נשלחה בהצלחה',
        description: 'נחזור אליך בהקדם האפשרי.',
      });
      form.reset();
      setSubject('');
    } catch {
      toast({
        title: 'משהו השתבש',
        description: 'לא הצלחנו לשלוח את הפנייה. נסו שוב או כתבו לנו בוואטסאפ.',
        variant: 'destructive',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="full_name">שם מלא</Label>
          <Input id="full_name" name="full_name" required autoComplete="name" placeholder="ישראל ישראלי" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">מספר טלפון</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9\-+() ]{9,15}"
            placeholder="050-0000000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">כתובת דוא״ל</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">נושא הפנייה</Label>
        <Select value={subject} onValueChange={setSubject} name="subject">
          <SelectTrigger id="subject">
            <SelectValue placeholder="בחר נושא" />
          </SelectTrigger>
          <SelectContent>
            {contactSubjects.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">במה נוכל לעזור?</Label>
        <Textarea id="message" name="message" rows={4} placeholder="ספרו לנו קצת על העסק ועל המטרה" />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full bg-gradient-brand text-base font-bold"
      >
        {pending ? (
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-5" aria-hidden="true" />
        )}
        {pending ? 'שולח…' : 'שליחה'}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        בשליחת הטופס אני מאשר/ת קבלת תכנים שיווקיים בהתאם למדיניות הפרטיות.
      </p>
    </form>
  );
}

export default ContactForm;
