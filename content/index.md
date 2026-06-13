---
seo:
  title: Pogo FrankenPHP Plugins
  description: Documentation for Queue, Scheduler, Pogo, Upload, and WebSocket plugins for FrankenPHP.
---

::u-page-hero{class="dark:bg-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Pogo [FrankenPHP Plugins]{.text-primary}

#description
Queue, scheduler, request-scoped parallel tasks, uploads, and WebSockets compiled directly into a FrankenPHP binary.

#links
  :::u-button
  ---
  to: /getting-started/introduction
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/y-l-g/pogo
  target: _blank
  ---
  View Pogo
  :::

#default
  :::prose-pre
  ---
  code: |
    {
      frankenphp

      pogo_queue {
        backend redis {
          url {$POGO_REDIS_URL}
        }
        worker public/queue-worker.php
      }

      pogo_scheduler {
        command php artisan schedule:run
      }

      pogo_upload {
        store default {
          worker public/upload-worker.php
          signing_secret {$POGO_UPLOAD_SECRET}
          backend local {
            root storage/app/pogo-uploads
          }
        }
      }
    }
  filename: Caddyfile
  ---

  ```caddyfile [Caddyfile]
  {
    frankenphp

    pogo_queue {
      backend redis {
        url {$POGO_REDIS_URL}
      }
      worker public/queue-worker.php
    }

    pogo_scheduler {
      command php artisan schedule:run
    }

    pogo_upload {
      store default {
        worker public/upload-worker.php
        signing_secret {$POGO_UPLOAD_SECRET}
        backend local {
          root storage/app/pogo-uploads
        }
      }
    }
  }
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
The extension set

#features
  :::u-page-feature
  ---
  icon: i-lucide-list-checks
  ---
  #title
  Queue

  #description
  Redis Streams backed queue workers with Laravel and Symfony Messenger drivers.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-calendar-clock
  ---
  #title
  Scheduler

  #description
  Embedded minute-aligned command runner for single-node and singleton deployments.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-split
  ---
  #title
  Pogo

  #description
Request-scoped parallel PHP tasks for fan-out and fan-in work.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-upload
  ---
  #title
  Upload

  #description
  Signed single-file upload ingress with Go streaming and PHP completion events.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-radio
  ---
  #title
  WebSocket

  #description
  Pusher-compatible WebSocket handler and Laravel broadcaster.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Choose the right tool

#features
  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Durable work

  #description
  Use Queue when work must survive the request and can be retried safely.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-clock
  ---
  #title
  Scheduled work

  #description
  Use Scheduler for simple cron-style triggering in single-node or singleton services.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  Parallel request work

  #description
  Use Pogo when independent work must finish before the response returns.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-upload-cloud
  ---
  #title
  Large uploads

  #description
  Use Upload when PHP should authorize uploads but Caddy should move the bytes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-radio-tower
  ---
  #title
  Realtime events

  #description
  Use WebSocket for Pusher-style channels and Laravel broadcasting.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
  :::u-page-c-t-a
  ---
  links:
    - label: Build FrankenPHP
      to: '/getting-started/building-frankenphp'
      trailingIcon: i-lucide-arrow-right
    - label: PHP API
      to: '/reference/php-api'
      variant: subtle
      icon: i-lucide-file-code-2
  title: Start with the shared build pattern
  description: Compile the modules you need into FrankenPHP, then configure each extension with a small Caddy block.
  class: dark:bg-neutral-950
  ---
::
