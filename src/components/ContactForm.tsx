"use client";

import { useState } from "react";
import { Button, Callout } from "./ui";

const SUBJECTS = ["Informações sobre o FACEU", "Suporte técnico de uma ferramenta", "Colaboração em pesquisa", "Parceria institucional"];

/** Sem servidor de e-mail: o formulário monta uma mensagem e a abre no programa de e-mail de quem escreve. */
export function ContactForm({ email, tools, defaultSubject }: { email: string; tools: string[]; defaultSubject?: string }) {
  const [opened, setOpened] = useState(false);
  const [href, setHref] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = String(f.get("subject"));
    const tool = String(f.get("tool") || "");
    const body = [
      `Nome: ${f.get("name")}`,
      `E-mail: ${f.get("email")}`,
      `Instituição: ${f.get("institution") || "—"}`,
      tool ? `Ferramenta: ${tool}` : null,
      "",
      String(f.get("message")),
    ].filter((l) => l !== null).join("\n");
    const url = `mailto:${email}?subject=${encodeURIComponent(`[FACEU] ${subject}`)}&body=${encodeURIComponent(body)}`;
    setHref(url);
    setOpened(true);
    window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} className="form-grid">
      <div className="field">
        <label htmlFor="c-name">Nome completo<span className="req" aria-hidden="true">*</span></label>
        <input id="c-name" name="name" className="control" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="c-email">E-mail<span className="req" aria-hidden="true">*</span></label>
        <input id="c-email" name="email" type="email" className="control" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="c-inst">Instituição</label>
        <input id="c-inst" name="institution" className="control" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="c-subject">Assunto</label>
        <select id="c-subject" name="subject" className="control" defaultValue={defaultSubject ?? SUBJECTS[0]}>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field span-2">
        <label htmlFor="c-tool">Ferramenta (se o assunto for suporte)</label>
        <select id="c-tool" name="tool" className="control" defaultValue="">
          <option value="">Não se aplica</option>
          {tools.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="field span-2">
        <label htmlFor="c-msg">Mensagem<span className="req" aria-hidden="true">*</span></label>
        <textarea id="c-msg" name="message" className="control" rows={6} required />
        <p className="hint">Ao enviar, a mensagem abre no seu programa de e-mail, já endereçada a {email}.</p>
      </div>
      <div className="span-2 stack stack-4">
        <div><Button type="submit" chip iconAfter="arrow-right">Preparar mensagem</Button></div>
        {opened ? (
          <div role="status">
            <Callout tone="success" title="Mensagem preparada">
              Se o seu programa de e-mail não abriu, <a href={href}>clique aqui</a> ou escreva diretamente para {email}.
            </Callout>
          </div>
        ) : null}
      </div>
    </form>
  );
}
