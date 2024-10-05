import pytest
from scrape import scrape_billboard

@pytest.fixture(scope='session')
def perform_scrape(pytestconfig):
    cached_data = pytestconfig.cache.get("billboard_results", None)
    if cached_data is not None:
        return cached_data

    result = scrape_billboard()

    pytestconfig.cache.set("billboard_results", result)
    return result

def test_length(perform_scrape):
    assert len(perform_scrape) == 100
