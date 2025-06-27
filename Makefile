all:
    ./build-all.sh

buildfs:
    pio run -t buildfs

uploadfs:
    pio run -t uploadfs

.PHONY: rebase-squash
rebase-squash:
    git fetch mm
    git checkout main
    git reset --soft mm/mdev
    git commit -m "Squashed commit of main changes on top of mm/mdev"
    @echo "Squashed rebase complete. You are now on main."