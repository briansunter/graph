title:: Io_uring (highlights)
author:: [[kernel.dk]]
full-title:: "Io_uring"
category:: #articles
url:: https://kernel.dk/io_uring.pdf

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- These were later augmented with pread(2) and pwrite(2) versions which allow passing in of an offse ([View Highlight](https://read.readwise.io/read/01gfhfsbvby6vrzrqm9yj078x3))
	- later still we got preadv(2) and pwritev(2) which are vector-based versions of the former ([View Highlight](https://read.readwise.io/read/01gfhfsrzex12efy3v9x5njc4b))
	- Linux also has preadv2(2) and pwritev2(2) system calls, which further extend the API to allow modifier flags ([View Highlight](https://read.readwise.io/read/01gfhfwp7xf9agv2m4satyqrgc))
	- The various differences of these system calls aside, they share the common trait that they are synchronous interfaces. This means that the system calls return when the data is ready (or written) ([View Highlight](https://read.readwise.io/read/01gfhfx4gmswsprpsrq9yjjz0k))
	- POSIX has aio_read(3) and aio_write(3) to satisfy that need, however the implementation of those is most often lackluster and performance is poor. ([View Highlight](https://read.readwise.io/read/01gfhfx9vcs0zj6g0hy59embg4))
	- Linux does have a native async IO interface, simply dubbed aio. Unfortunately, it suffers from a number of limitations: ([View Highlight](https://read.readwise.io/read/01gfhfxp9aycbbc151fqckeeyw))