# AtlasHub.SI — Architecture Baseline

## Canonical role

`atlashub.si` is the canonical public gateway to the AtlasHub ecosystem.

## Surface map

| Surface | Canonical domain | Responsibility |
| --- | --- | --- |
| Core | atlashub.si | Institutional gateway, solutions, insights, ecosystem |
| App | app.atlashub.si | Authenticated intelligence workspace |
| Academy | academy.atlashub.si | Learning and capability development |
| Editions | editions.atlashub.si | Publishing and executive intelligence |

## Repository flow

```text
nexflowx-hub/AtlasHub.Si
        │
        │ develop + validate
        ▼
reviewed release
        │
        ▼
atlashub-digital/AtlasHub.Si
```

The fork is the working surface. The upstream repository is the curated release surface.
