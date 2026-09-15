# The Wahinterface — thoughts, not a build

**Status: discussion only. Nothing has been built. Do not implement from this
document without a decision.**

The idea, as put: a tablet-style interface with apps on it. The shop and other
systems move out of the Wahbook sidebar and into their own apps — a shop app, and
so on.

Here is what I think, honestly, including the parts I think are wrong.

---

## The problem it's solving is real

The sidebar is doing two completely different jobs and pretending they are one
job.

Some sidebar entries are **places in an encyclopedia**: factions, nations,
dynasties, faiths, battles. You navigate to them, you read, you leave. That is a
wiki, and a sidebar is the correct control for a wiki.

Other entries are **tools you operate**: the shop, the inventory, the wallets,
the reputation matrix, the intel board, the dice. These have state. You change
things in them. Some of them write to `localStorage`. A sidebar link is a bad
control for a tool, because a sidebar implies *"here is another article"* and
these are not articles.

Right now both categories sit in the same list at the same visual weight. That
is the actual complaint, and it is a legitimate one. Something is wrong.

## But I don't think a tablet is automatically the fix

My worry is that a tablet chrome is a **skin**, and the problem is
**taxonomy**. If you draw a bezel around the current systems and give them app
icons, you have the same systems with a nicer frame and one extra click in front
of each of them. The shop is not hard to find today. It is hard to *use*,
because it doesn't feel connected to the wallet or the inventory.

So the question I'd want answered before anyone writes a line of code is:

> **Is the tablet a container, or is it a context?**

A **container** is a launcher. Icons, you tap one, it opens the existing page.
Cheap to build, looks great, changes nothing. I think this would be disappointing
within a week.

A **context** is different. In a context, the apps know about each other. You
buy something in the shop app and the wallet app's badge changes while you're
looking at it. The inventory app shows the thing arriving. You don't navigate
between them; they're all live at once, because they're all the same character's
stuff. *That* is worth building, and it's also a much bigger job.

The tablet framing only pays off if you take the second one. The first one is a
theme.

## What makes it genuinely attractive

Three things, and they're strong:

**1. It's diegetic.** The archive is written as Waluigi's own files. A device he
carries is more in-fiction than a website sidebar is. The Wahbook conceit is
already halfway there — this finishes the thought. That's a real gain and I
don't want to undersell it.

**2. It creates a home for state.** Everything in the archive that remembers
something — intel, roll verdicts, wallets, inventory, standing — currently lives
scattered across pages that otherwise don't remember anything. A tablet is an
honest place to put "the things that are true about *you*, right now" as opposed
to "the things that are true about the world". That distinction doesn't exist in
the UI at all today, and it should.

**3. It solves the sidebar length problem structurally** rather than by pruning.
Moving eight tools off the sidebar isn't hiding them, it's reclassifying them.

## What I'd worry about

**Discoverability.** A sidebar link is one click from anywhere. An app inside a
tablet is: open tablet, find icon, tap icon. If the shop gets *less* used because
it got prettier, that's a loss. Whatever happens, the tablet needs to be
reachable from every page without navigating away — a persistent corner button,
not a page you visit.

**Mobile.** A tablet UI on a phone is a tablet inside a tablet. This needs an
answer up front, not afterwards. My instinct: on narrow screens the chrome
disappears entirely and the apps become a plain full-screen list. The bezel is a
desktop luxury.

**Deep links must survive.** The archive's routes are shared, bookmarked, and
linked from inside articles. `#/shop` must not stop working, and it must not
start meaning "open the tablet and hope". Every app needs its own route that
opens the tablet *already on that app*. If that isn't designed in from the first
commit it will never be retrofitted.

**Scope.** "Move the shop into an app" is a weekend. "Make the systems share live
state inside a shell" is not, and the latter is the version worth having. I'd
rather see this done properly and slowly than see a launcher ship and the idea
get considered spent.

## If it happens, the order I'd do it in

1. **Decide the app list first, on paper.** Not by looking at the sidebar and
   asking what could move, but by asking what a player actually operates. My
   guess at the real list is short: Shop, Inventory & Wallet (one app, not two),
   Standing, Intel, Party, Dice. Six. Everything else stays in the wiki.
2. **Build the shell with exactly one app in it** — Inventory & Wallet, because
   it's the one that proves the "apps know about each other" thesis. If the
   wallet and inventory don't feel better together than apart, the whole premise
   is wrong and you've found out cheaply.
3. **Only then move the shop in**, and let it read the wallet live.
4. **Routes throughout.** Every app addressable from the first commit.

## My actual opinion

I like it, with one reservation: the value isn't the tablet, it's the admission
that **the archive has two kinds of page and has been pretending it has one.**
The tablet is a good way to make that admission visible. It is not the only way,
and if it turns out to be expensive, the same win is available by just splitting
the sidebar into "Archive" and "Your file" and styling the second group
differently.

So — worth doing, but do it for the taxonomy, not for the bezel. And if it ever
starts feeling like a skin, that's the signal to stop and take the cheap version
instead.

*Filed as a note. Awaiting a decision.*
